import { connect, type ConnectionOptions } from '@/database'

export const connectStore = async (
  connectionOptions: Partial<ConnectionOptions> = {}
) => {
  const database = connectionOptions.database ?? process.env.SURREAL_DATABASE
  const url = connectionOptions.url ?? process.env.SURREAL_URL
  const namespace = connectionOptions.namespace ?? process.env.SURREAL_NC

  if (!database || !url || !namespace) {
    throw new Error('Missing database credentials')
  }

  return await connect({
    database,
    namespace,
    url,
    ...connectionOptions,
  })
}
