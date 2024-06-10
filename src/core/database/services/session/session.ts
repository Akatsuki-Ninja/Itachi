import { getDatabase, type UserEntityLike } from '@/core'

export const session = async (): Promise<undefined | UserEntityLike> => {
  const db = await getDatabase()

  return await db.info<UserEntityLike>()
}
