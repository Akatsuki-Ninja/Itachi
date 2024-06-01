import { getDatabase } from '@/database'

export const authenticate = async (token: string) => {
  const db = await getDatabase()

  return db.authenticate(token)
}
