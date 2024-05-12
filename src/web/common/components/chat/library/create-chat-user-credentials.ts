import {
  type DefaultGenerics,
  type OwnUserResponse,
  type UserResponse,
} from 'stream-chat'

import { type TemporalUserEntity, type UserEntity } from '@/database'

export type ChatUser =
  | OwnUserResponse<DefaultGenerics>
  | UserResponse<DefaultGenerics>

export const createChatUserCredentials = (
  user: TemporalUserEntity | UserEntity
): ChatUser => ({
  id: user.id.split(':')[1],
  name: user.name,
})
