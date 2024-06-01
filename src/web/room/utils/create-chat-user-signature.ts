import { cutEntityId, isTemporalUser, type UserEntityLike } from '@/core'
import type { ChatUserType } from '@/web/streaming'
import { getUserPreview } from '@/web/user'

export const createChatUserSignature = (
  userLike: UserEntityLike
): ChatUserType => {
  const userPreview = getUserPreview(userLike)

  if (isTemporalUser(userPreview)) {
    return {
      id: cutEntityId(userPreview.id),
      name: userPreview.name,
    }
  }

  return {
    email: userPreview.email,
    id: cutEntityId(userPreview.id),
    name: userPreview.name,
  }
}
