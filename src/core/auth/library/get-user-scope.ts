import type {
  SignupCredentials,
  TemporalSignupCredentials,
  TemporalUserEntity,
  UserEntity,
  UserEntityLike,
} from '@/core'

import { UserScope } from '../services/signup'

export const getScopeFromCredentials = (
  credentials: SignupCredentials | TemporalSignupCredentials
) => {
  if (isTemporalCredentials(credentials)) {
    return UserScope.temporal
  }

  return UserScope.user
}

export const isTemporalUser = (
  userLike: UserEntityLike
): userLike is TemporalUserEntity => {
  return UserScope.temporal in userLike
}

export const isRegularUser = (
  userLike: UserEntityLike
): userLike is UserEntity => {
  return !(UserScope.temporal in userLike) && 'email' in userLike
}

const isTemporalCredentials = (
  credentials: SignupCredentials | TemporalSignupCredentials
): credentials is TemporalSignupCredentials => {
  return UserScope.temporal in credentials
}
