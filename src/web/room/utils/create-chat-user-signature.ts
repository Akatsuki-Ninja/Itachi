import { cutEntityId, type TemporalUserEntity, type UserEntity } from '@/core'
import type { ChatUserType } from '@/web/streaming'

export const createChatUserSignature = (
  user: TemporalUserEntity | UserEntity
): ChatUserType => ({
  email: 'email' in user ? user.email : undefined,
  id: cutEntityId(user.id),
  name: user.name,
})
