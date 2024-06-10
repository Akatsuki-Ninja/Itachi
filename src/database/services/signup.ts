import { getDatabase } from '@/database'

export enum UserScope {
  temporal = 'temporal',
  user = 'user',
}

export type Signup = {
  email?: string
  name?: string
  password?: string
  scope: UserScope
}

export const signup = async (payload: Signup): Promise<string> => {
  const db = await getDatabase()

  return await db.signup(payload)
}
