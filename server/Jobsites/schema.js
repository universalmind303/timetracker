
import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from 'graphql'

import resolvers from './resolvers'

const {
  Query: {
    getAllJobsites
  },
  Mutation: {
    addJobsite,
    deleteJobsite,
    modifyJobsite
  }
} = resolvers

const jobSiteType = new GraphQLObjectType({
  name: 'Jobsite',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    logs: { type: new GraphQLList(GraphQLString) }
  }
})

// const c
const jobsiteMutation = new GraphQLInputObjectType({
  name: 'JobsiteMutation',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    coordinates: {
      type: new GraphQLInputObjectType({
        name: 'coordinates',
        fields: {
          lat: { type: GraphQLInt },
          long: { type: GraphQLInt },
        }
      })
    },
  }
})

const schema = {
  Query: {
    Jobsites: {
      type: new GraphQLList(jobSiteType),
      resolve: getAllJobsites
    },
  },
  Mutation: {
    deleteJobsite: {
      type: GraphQLString,
      args: {
        input: { type: jobsiteMutation }
      },
      resolve: deleteJobsite,
    },
    addJobsite: {
      type: GraphQLString,
      args: {
        input: { type: jobsiteMutation }
      },
      resolve: addJobsite
    },
    modifyJobsite: {
      type: GraphQLString,
      args: {
        input: { type: jobsiteMutation }
      },
      resolve: modifyJobsite,
    },
  }
}

export default schema
