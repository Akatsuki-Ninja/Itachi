import { useCallback, useRef } from 'react'
import {
  type Channel,
  type ConnectionOpen,
  type DefaultGenerics,
  type OwnUserResponse,
  type UserResponse,
} from 'stream-chat'

import { createChatClient } from '../library/create-chat-client.ts'

export type ChatUser =
  | OwnUserResponse<DefaultGenerics>
  | UserResponse<DefaultGenerics>
export type UserConnection = ConnectionOpen<DefaultGenerics>
export type ChatChannel = Channel<DefaultGenerics>

export const useChatClient = () => {
  const { current: chatClient } = useRef(createChatClient())

  const connectUser = useCallback(
    async (user: ChatUser): Promise<UserConnection> => {
      const connection = await chatClient.connectUser(
        user,
        chatClient.devToken(user.id)
      )

      if (!connection) throw new Error('Failed to connect user')

      return connection
    },
    [chatClient]
  )

  const joinChannel = useCallback(
    (
      user: ChatUser,
      { channelId, title }: { channelId: string; title?: string }
    ): ChatChannel =>
      chatClient.channel('messaging', channelId, {
        members: [user.id], // TODO: do we need to fetch other members?
        name: title ?? `Room #${channelId}`,
      }),
    [chatClient]
  )

  return { chatClient, connectUser, joinChannel }
}
