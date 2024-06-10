import { signup, UserScope } from '@/database'

export type TemporalRegisterCredentials = {
  name?: string
}

export type RegisterCredentials = {
  email: string
  name?: string
  password: string
}

export const register = async (
  credentials: RegisterCredentials | TemporalRegisterCredentials
) => {
  return await signup({
    scope: getScopeFromCredentials(credentials),
    ...credentials,
  })
}

const getScopeFromCredentials = (
  credentials: RegisterCredentials | TemporalRegisterCredentials
) => {
  if (isTemporalCredentials(credentials)) {
    return UserScope.temporal
  }

  return UserScope.user
}

const isTemporalCredentials = (
  credentials: RegisterCredentials | TemporalRegisterCredentials
): credentials is TemporalRegisterCredentials => {
  return !('email' in credentials)
}
