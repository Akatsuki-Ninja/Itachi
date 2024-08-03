import { getDatabase } from '@/database'

import { Token } from '../types/token'

export type Signup = {
  email?: string
  name?: string
  password?: string
  scope: string
}

export const signup = async (payload: Signup): Promise<Token> => {
  const db = await getDatabase()

  return await db.signup(payload)
}
