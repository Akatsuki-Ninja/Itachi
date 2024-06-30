import { close, connectStore, query } from '@/database'

import { MIGRATION_QUERY } from './migartion-query'

const migrate = async () => {
  await connectStore()
  await query(MIGRATION_QUERY)

  await close()
}

migrate()
