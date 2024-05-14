import { getDatabase } from '@/core'
import { getScopeFromCredentials } from '@/core/auth/library/get-user-scope'

export type TemporalSignupCredentials = {
  name?: string
}

export type SignupCredentials = {
  email: string
  name?: string
  password: string
}

export enum UserScope {
  temporal = 'temporal',
  user = 'user',
}

export const signup = async (
  credentials: SignupCredentials | TemporalSignupCredentials
) => {
  const db = await getDatabase()

  return await db.signup({
    namespace: 'main',
    scope: getScopeFromCredentials(credentials),
    ...credentials,
  })
}
