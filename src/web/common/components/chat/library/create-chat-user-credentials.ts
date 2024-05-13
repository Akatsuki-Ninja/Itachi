import {
  type DefaultGenerics,
  type OwnUserResponse,
  type UserResponse,
} from 'stream-chat'

import {
  cutEntityId,
  type TemporalUserEntity,
  type UserEntity,
} from '@/database'

export type ChatUser =
  | OwnUserResponse<DefaultGenerics>
  | UserResponse<DefaultGenerics>

export const createChatUserCredentials = (
  user: TemporalUserEntity | UserEntity
): ChatUser => ({
  id: cutEntityId(user.id),
  name: user.name,
})
