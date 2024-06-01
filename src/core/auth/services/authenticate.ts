import { getDatabase } from '@/core'

export const authenticate = async (token: string) => {
  const db = await getDatabase()

  return db.authenticate(token)
}
