import { MongoClient } from 'mongodb'

async function connect() {
  try {
    const db = await MongoClient.connect('mongodb://localhost:27017/db')
    return db
  } catch (error) {
    console.error('Failed to connect to database', error)
    return error
  }
}
const db = connect()

export default db
