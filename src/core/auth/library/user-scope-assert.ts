import {
  type TemporalUserEntity,
  type UserEntity,
  type UserEntityLike,
} from '@/core'
import { UserScope } from '@/database'

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
