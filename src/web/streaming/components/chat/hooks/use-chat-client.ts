import { useCallback, useRef } from 'react'
import {
  type Channel,
  type ConnectionOpen,
  type DefaultGenerics,
} from 'stream-chat'

import { createChatClient } from '../../../services/create-chat-client'
import { ChatUser } from '../../../services/create-chat-user-signature'

export type UserConnection = ConnectionOpen<DefaultGenerics>
export type ChatChannel = Channel<DefaultGenerics>

export const useChatClient = () => {
  const { current: client } = useRef(createChatClient())

  const connectUser = useCallback(
    async (user: ChatUser): Promise<UserConnection> => {
      const connection = await client.connectUser(
        user,
        client.devToken(user.id)
      )

      if (!connection) throw new Error('Failed to connect user')

      return connection
    },
    [client]
  )

  const joinChannel = useCallback(
    (
      user: ChatUser,
      { channelId, title }: { channelId: string; title?: string }
    ): ChatChannel => {
      return client.channel('messaging', channelId, {
        members: [user.id], // TODO: do we need to fetch other members?
        name: title ?? `Room #${channelId}`,
      })
    },
    [client]
  )

  return { client, connectUser, joinChannel }
}
