import { getDatabase, type Token } from '@/database'

export const authenticate = async ({ token }: { token: Token }) => {
  const db = await getDatabase()

  return await db.authenticate(token)
}
