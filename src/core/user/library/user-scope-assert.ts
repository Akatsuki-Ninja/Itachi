import type { RegularUserDto, TemporalUserDto, UserLikeDto } from '@/core'
import { UserScope } from '@/store'

export const isTemporalUser = (user: UserLikeDto): user is TemporalUserDto => {
  return UserScope.temporal in user
}

export const isRegularUser = (
  userLike: UserLikeDto
): userLike is RegularUserDto => {
  return !(UserScope.temporal in userLike) && 'email' in userLike
}
