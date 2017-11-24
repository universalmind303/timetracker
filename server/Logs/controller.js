import { ObjectId } from 'mongodb'

// MongoDB connection
import DB from '../db'

class Controller {
  constructor() {
    this.init()
  }

  async init() {
    this.db = await DB
  }

  async getAllLogs(userID) {
    const { db } = this
    try {
      const logs = await db.collection('logs').find({ user: userID }).toArray()
      return logs
    } catch (error) {
      return error
    }
  }

  async getLogsByJobsite(userID, jobsite) {
    const { db } = this
    try {
      const logs = await db.collection('logs').find({ user: userID, _id: jobsite }).toArray()
      return logs
    } catch (error) {
      return error
    }
  }

  async addLog({
    userID,
    jobsite,
    start,
    stop
  }) {
    const { db } = this
    try {
      const addedSuccessfully = await db.collection('logs').insert({
        user: userID,
        _id: ObjectId(),
        jobsite,
        start,
        stop
      })
      return addedSuccessfully
    } catch (error) {
      return error
    }
  }
}

export default new Controller()
