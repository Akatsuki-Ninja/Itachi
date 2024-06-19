import { getDatabase } from '@/database'

export type Signup = {
  email?: string
  name?: string
  password?: string
  scope: string
}

export const signup = async (payload: Signup): Promise<string> => {
  const db = await getDatabase()

  return await db.signup(payload)
}
