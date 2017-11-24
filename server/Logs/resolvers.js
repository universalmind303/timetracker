import ctrl from './controller'

const resolvers = {
  Query: {
    // retrieve array of all logs
    async getAllLogs({ user }) {
      try {
        const logs = await ctrl.getAllLogs(user.id)
        // returns new object with id mapped to id instead of _id
        return logs.map(({ _id, ...data }) => ({
          id: _id,
          ...data
        }))
      } catch (error) {
        console.error(error.Error)
        return error
      }
    }
  },
  Mutation: {
    async addLog({ user }, { input: { jobsite, start, stop } }) {
      const { result, message } = await ctrl.addLog({
        userID: user.id,
        jobsite,
        start,
        stop
      })
      console.log(result)
      if (message) {
        console.error(message)
        return message
      }
      return result
    },
  }
}
export default resolvers
