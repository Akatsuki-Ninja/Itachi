import {
  Channel as ChannelInstance,
  ConnectionOpen,
  DefaultGenerics,
  StreamChat,
} from 'stream-chat'
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

const apiKey = 'athncwx6uezf'

const chatClient = new StreamChat(apiKey)

export const Chat = () => {
  const { data: user } = useAuth()
  const chatUser = useMemo(
    () =>
      user
        ? {
            id: user.id.split(':')[1],
            name: user.name,
          }
        : null,
    [user]
  )

  const [channel, setChannel] = useState<ChannelInstance<DefaultGenerics>>()

  const connectPromiseRef = useRef<
    Promise<ConnectionOpen<DefaultGenerics> | void> | undefined
  >(undefined)

  useEffect(() => {
    if (!chatUser || connectPromiseRef.current) return

    connectPromiseRef.current = chatClient
      .connectUser(chatUser, chatClient.devToken(chatUser.id))
      .then(() =>
        setChannel(
          chatClient.channel('messaging', 'to_generate', {
            members: [chatUser.id],
            name: 'Talk about React',
          })
        )
      )
  }, [chatUser])

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
