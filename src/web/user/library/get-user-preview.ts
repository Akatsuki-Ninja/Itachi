import { isTemporalUser, type UserLikeDto } from '@/core'

import type { UserPreview } from '../models/user-preview-model'

const TEMPORAL_USER_EMPTY_NAME = 'Anonymous'

export const getUserPreview = (user: UserLikeDto): UserPreview => {
  if (isTemporalUser(user)) {
    return {
      ...user,
      name: user.name ?? TEMPORAL_USER_EMPTY_NAME,
    }
  }

  return {
    ...user,
    name: user.name ?? user.email,
  }
}
