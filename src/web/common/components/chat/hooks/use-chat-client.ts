import { useCallback, useRef } from 'react'
import {
  type Channel,
  type ConnectionOpen,
  type DefaultGenerics,
} from 'stream-chat'

import type { DefaultEmptyType } from '@/common'

import { createChatClient } from '../library/create-chat-client'
import { ChatUser } from '../library/create-chat-user-credentials'

export type UserConnection = ConnectionOpen<DefaultGenerics>
export type ChatChannel = Channel<DefaultGenerics>

export const useChatClient = () => {
  const { current: chatClient } = useRef(createChatClient())
  const userConnectionRef = useRef<DefaultEmptyType<UserConnection | void>>()
  const channelRef = useRef<DefaultEmptyType<ChatChannel>>()

  const connectUser = useCallback(
    async (user: ChatUser): Promise<UserConnection> => {
      if (userConnectionRef.current) return userConnectionRef.current

      const connection = await chatClient.connectUser(
        user,
        chatClient.devToken(user.id)
      )

      if (!connection) throw new Error('Failed to connect user')

      // TODO: could be issue when we would like to reconnect user.
      userConnectionRef.current = connection

      return connection
    },
    [chatClient]
  )

  const joinChannel = useCallback(
    (
      user: ChatUser,
      { channelId, title }: { channelId: string; title?: string }
    ): ChatChannel => {
      if (channelRef.current) return channelRef.current

      const channel = chatClient.channel('messaging', channelId, {
        members: [user.id], // TODO: do we need to fetch other members?
        name: title ?? `Room #${channelId}`,
      })

      /**
       * TODO: could be issue when we would like to connect to another channel.
       * For example user create new channel or go to another channel.
       */
      channelRef.current = channel

      return channel
    },
    [chatClient]
  )

  return { chatClient, connectUser, joinChannel }
}
