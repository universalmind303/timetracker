import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql'

import resolvers from './resolvers'

const {
  Query: {
    getAllLogs
  },
  Mutation: {
    addLog
  }
} = resolvers

const LogType = new GraphQLObjectType({
  name: 'Log',
  fields: {
    jobsite: { type: new GraphQLNonNull(GraphQLString) },
    start: { type: new GraphQLNonNull(GraphQLString) },
    stop: { type: new GraphQLNonNull(GraphQLString) },
  }
})

const LogMutation = new GraphQLInputObjectType({
  name: 'LogMutation',
  fields: {
    jobsite: { type: GraphQLString },
    start: { type: GraphQLString },
    stop: { type: GraphQLString },
  }
})

const schema = {
  Query: {
    Logs: {
      type: new GraphQLList(LogType),
      resolve: getAllLogs,
    },
  },
  Mutation: {
    addLog: {
      type: GraphQLString,
      args: {
        input: { type: LogMutation }
      },
      resolve: addLog
    }
  }
}

export default schema
