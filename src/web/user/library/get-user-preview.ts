import { isTemporalUser, type UserEntityLike } from '@/core'

const TEMPORAL_USER_EMPTY_NAME = 'Anonymous User'

export const getUserPreview = (userLike: UserEntityLike): UserEntityLike => {
  if (isTemporalUser(userLike)) {
    return {
      ...userLike,
      name: userLike.name ?? TEMPORAL_USER_EMPTY_NAME,
    }
  }

  return userLike
}
