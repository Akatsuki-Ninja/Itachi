import { connect } from '@/database'

import type { ConnectionOptions } from '../../library/database'

export const connectTestDb = async (
  connectionOptions: Partial<ConnectionOptions> = {}
) => {
  const database = connectionOptions.database ?? process.env.SURREAL_DATABASE
  const url = connectionOptions.url ?? process.env.SURREAL_URL

  if (!database || !url) {
    throw new Error('Missing database credentials')
  }

  return await connect({
    database,
    namespace: `test-${Math.random()}`,
    url,
    ...connectionOptions,
  })
}
