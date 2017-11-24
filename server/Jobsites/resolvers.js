import ctrl from './controller'

const resolvers = {
  // Query
  Query: {
    // retrieve array of all Jobsites
    async getAllJobsites({ user }) {
      try {
        const jobsites = await ctrl.getAllJobsites(user.id)

        // return new object with id mapped to id instead of _id
        return jobsites.map(({ _id, ...data }) => ({
          id: _id,
          ...data
        }))
      } catch (error) {
        console.error(error.Error)
        return error
      }
    }
  },


  // Mutations
  Mutation: {
    async addJobsite({ user }, { input: { coordinates, name } }) {
      const { result, message } = await ctrl.addJobsite({ userID: user.id, coordinates, name })

      if (message) {
        console.error(message)
        return message
      }
      return result
    },
    async deleteJobsite() {
      return 'delete jobsite'
    }
  }
}
export default resolvers
