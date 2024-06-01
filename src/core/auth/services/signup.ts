import { getDatabase } from '@/core'

export type TemporalSignupCredentials = {
  name?: string
}

export type SignupCredentials = {
  email: string
  name?: string
  password: string
}

export const signup = async (
  credentials: SignupCredentials | TemporalSignupCredentials
) => {
  const db = await getDatabase()

  return await db.signup({
    namespace: 'main',
    scope: isTemporalCredentials(credentials) ? 'temporal' : 'user',
    ...credentials,
  })
}

const isTemporalCredentials = (
  credentials: SignupCredentials | TemporalSignupCredentials
): credentials is TemporalSignupCredentials => {
  return !(credentials as SignupCredentials).email
}
