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
import { useEffect, useMemo, useRef, useState } from 'react'

import { useAuth } from '@/web/auth'
import { type DefaultEmptyType } from '@/common'

import {
  type ChatChannel,
  useChatClient,
  type UserConnection,
} from './hooks/use-chat-client'
import { createChatUserCredentials } from './library/create-chat-user-credentials'

type ChatProps = {
  channelId: string
}

export const Chat = ({ channelId }: ChatProps) => {
  const { data: user } = useAuth()

  const { chatClient, connectUser, joinChannel } = useChatClient()
  const [channel, setChannel] = useState<DefaultEmptyType<ChatChannel>>()
  const connectPromiseRef =
    useRef<DefaultEmptyType<Promise<UserConnection | void>>>()

  const chatUser = useMemo(
    () => (user ? createChatUserCredentials(user) : null),
    [user]
  )

  useEffect(() => {
    if (!chatUser || connectPromiseRef.current) return

    connectPromiseRef.current = connectUser(chatUser).then(() =>
      setChannel(
        joinChannel(chatUser, {
          channelId,
          title: 'Talk about React',
        })
      )
    )
  }, [channelId, chatUser, connectUser, joinChannel])

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
