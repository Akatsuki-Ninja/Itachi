import { Surreal } from 'surrealdb.js'

export const database = new Surreal()

export const connect = async () => {
  await database.connect('http://127.0.0.1:8000/rpc', {
    database: 'itachi',
    namespace: 'main',
  })
}

export const ready = async () => {
  try {
    await database.wait()
  } catch (error) {
    await connect()
  }
}

export const getDatabase = async () => {
  await ready()

  return database
}
