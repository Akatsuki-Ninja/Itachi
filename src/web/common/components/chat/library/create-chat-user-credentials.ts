import {
  type DefaultGenerics,
  type OwnUserResponse,
  type UserResponse,
} from 'stream-chat'

import { type TemporalUserEntity, type UserEntity } from '@/database'

export const createChatUserCredentials = (
  user: TemporalUserEntity | UserEntity
): OwnUserResponse<DefaultGenerics> | UserResponse<DefaultGenerics> => ({
  id: user.id.split(':')[1],
  name: user.name,
})
