// @flow

import { ObjectId } from 'mongodb'

// MongoDB connection
import DB from '../db'

class Controller {
  constructor() {
    this.init()
  }

  async init(): Promise {
    this.db = await DB
  }

  async getAllJobsites(userID: string): Promise {
    const { db } = this
    try {
      const jobsites = await db.collection('jobsites').find({ user: userID }).toArray()
      return jobsites
    } catch (error) {
      return error
    }
  }

  async addJobsite({ userID, coordinates, name }: object<string>): Promise {
    const { db } = this
    try {
      const addedSuccessfully = await db.collection('jobsites').insert({
        user: userID,
        _id: ObjectId(),
        name,
        coordinates
      })
      return addedSuccessfully
    } catch (error) {
      return error
    }
  }

  /**
   * [removeJobsite description]
   * @param  {[type]}  id [id of item to be deleted]
   * @return {Promise}    [status object from mongodb]
   */

  async removeJobsite(id: string): Promise {
    const { db } = this
    try {
      const ok = await db.collection('jobsites').deleteOne({
        _id: ObjectId(id)
      })
      return ok
    } catch (error) {
      return error
    }
  }
}

export default new Controller()
