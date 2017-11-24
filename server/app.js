import express from 'express'
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express'

import errorHandler from './errorHandler'
import middleware from './middleware'
import schema from './rootSchema'
import { routes as authRoutes } from './Auth'

const PORT = process.env.PORT || 8000

const app = express()

app.use(...middleware)
app.use('/auth', authRoutes)

app.use(
  '/graphql',
  graphqlExpress(request => ({
    rootValue: {
      user: request.user,
      session: request.session
    },
    schema
  }))
)

app.get(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

app.use(...errorHandler)

const portlog = () => console.log(`Server is listening on port: ${PORT}`)

app.listen(PORT, portlog)

export default app
