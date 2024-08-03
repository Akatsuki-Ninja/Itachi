import {
  type SingupValues,
  type TemporalSignupValues,
  UserScope,
} from '@/store'

export const getScopeFromCredentials = (
  credentials: SingupValues | TemporalSignupValues
): UserScope => {
  if (isTemporalCredentials(credentials)) {
    return UserScope.temporal
  }

  return UserScope.user
}

const isTemporalCredentials = (
  credentials: SingupValues | TemporalSignupValues
): credentials is TemporalSignupValues => {
  return !('email' in credentials)
}
