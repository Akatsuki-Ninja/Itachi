import { close, query } from '@/database'
import { connectStore } from '@/store'

import { MIGRATION_QUERY } from './migartion-query'

const migrate = async () => {
  await connectStore()
  await query(MIGRATION_QUERY)

  await close()
}

migrate()
