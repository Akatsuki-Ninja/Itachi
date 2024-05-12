import {
  Channel,
  ChannelHeader,
  Chat as ChatProvider,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react'
import 'stream-chat-react/dist/css/v2/index.css'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { useAuth } from '@/web/auth'
import { type DefaultEmptyType } from '@/common'

import { type ChatChannel, useChatClient } from './hooks/use-chat-client'
import { createChatUserCredentials } from './library/create-chat-user-credentials'

type ChatProps = {
  channelId: string
}

export const Chat = ({ channelId }: ChatProps) => {
  const { data: user } = useAuth()

  const chatUser = useMemo(
    () => (user ? createChatUserCredentials(user) : null),
    [user]
  )

  const { chatClient, connectUser, joinChannel } = useChatClient()
  const [channel, setChannel] = useState<DefaultEmptyType<ChatChannel>>()

  const setupChat = useCallback(async () => {
    if (!chatUser) return

    await connectUser(chatUser)

    setChannel(
      joinChannel(chatUser, {
        channelId,
        title: 'Talk about React',
      })
    )
  }, [channelId, chatUser, connectUser, joinChannel])

  useEffect(() => {
    setupChat().catch(console.error)
  }, [setupChat])

  return (
    <ChatProvider client={chatClient}>
      {channel && (
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      )}
    </ChatProvider>
  )
}
