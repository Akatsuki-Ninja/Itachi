import { Surreal } from 'surrealdb.js'

export const surreal = new Surreal()

export type ConnectionOptions = {
  database: string
  namespace: string
  url: string
}

export const connect = async ({
  database,
  namespace,
  url,
}: ConnectionOptions) => {
  await surreal.connect(url, {
    database,
    namespace,
  })
}

export const getDatabase = async () => {
  await ready()

  return surreal
}

export const ready = async () => {
  await surreal.wait()
}

export const disconnect = async () => {
  await surreal.close()
}
