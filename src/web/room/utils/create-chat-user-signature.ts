import { cutEntityId, type UserLikeDto } from '@/core'
import type { ChatUserType } from '@/web/streaming'
import { getUserPreview } from '@/web/user'

export const createChatUserSignature = (
  userLike: UserLikeDto
): ChatUserType => {
  const userPreview = getUserPreview(userLike)
  return {
    ...getUserPreview(userLike),
    id: cutEntityId(userPreview.id),
  }
}
