import type {
  DefaultGenerics,
  OwnUserResponse,
  UserResponse,
} from 'stream-chat'

export type ChatUserType =
  | OwnUserResponse<DefaultGenerics>
  | UserResponse<DefaultGenerics>
