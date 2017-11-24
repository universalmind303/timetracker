// @flow
import React from 'react'
import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux'
import thunk from 'redux-thunk'

import type { Node } from 'react'

import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import App from './src'
import rootReducer from './src/rootReducer'


// graphql
const networkInterface = createNetworkInterface({
  opts: {
    credentials: 'include'
  },
  uri: '192.168.0.12:8000/graphql',
})

const client = new ApolloClient({
  networkInterface,
})

const masterReducer = combineReducers({
  ...rootReducer,
  apollo: client.reducer()
})


const middleware = [thunk]
const store = compose(applyMiddleware(...middleware))(createStore)(masterReducer)

function AppWithRedux(): Node {
  return (
    <ApolloProvider store={store} client={client} >
      <App />
    </ApolloProvider>
  )
}

export default AppWithRedux
