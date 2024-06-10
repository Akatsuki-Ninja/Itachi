import type { UserEntityLike } from '@/core'
import { getDatabase } from '@/database'

export const session = async (): Promise<undefined | UserEntityLike> => {
  const db = await getDatabase()

  return await db.info<UserEntityLike>()
}
