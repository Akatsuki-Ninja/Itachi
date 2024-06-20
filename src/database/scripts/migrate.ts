import { close, query } from '@/database'

import { MIGRATION_QUERY } from './migartion-query'
;(async () => {
  await query(MIGRATION_QUERY)

  await close()
})()
