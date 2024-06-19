import {
  type RegisterCredentials,
  type TemporalRegisterCredentials,
  UserScope,
} from '@/store'

export const getScopeFromCredentials = (
  credentials: RegisterCredentials | TemporalRegisterCredentials
): UserScope => {
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
