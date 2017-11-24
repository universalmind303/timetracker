import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'

import { schema as Jobsites } from './Jobsites'
import { schema as Logs } from './Logs'

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    ...Jobsites.Query,
    ...Logs.Query
  },
})

const mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...Jobsites.Mutation,
    ...Logs.Mutation
  }
})

const dynamicSchema = new GraphQLSchema({
  query: queryType,
  mutation: mutationType
})

export default dynamicSchema
