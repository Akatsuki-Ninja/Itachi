import { getDatabase } from '@/core'

export const requireAuthentication = async () => {
  const db = await getDatabase()

  const session = await db.info()

  if (!session) {
    throw Error('User is not logged in')
  }

  return session
}
