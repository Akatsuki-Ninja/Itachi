import { getDatabase } from '@/database'

export const requireAuthentication = async () => {
  const db = await getDatabase()

  const session = await db.info()

  if (!session) {
    throw Error('User is not logged in')
  }

  return session
}
