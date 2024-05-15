import {
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react'
import 'stream-chat-react/dist/css/v2/index.css'

import type { ChatUserType } from '../../types/chat-user-type'

import { useMessengerClient } from './hooks/use-messenger-client'
import { Channel } from './channel'

export const Messenger = ({
  channelId,
  token,
  user,
}: {
  channelId: string
  token: string
  user: ChatUserType
}) => {
  const { client } = useMessengerClient({
    token,
    user,
  })

  if (!client) return null

  return (
    <Chat client={client}>
      <Channel channelId={channelId}>
        <Window>
          <ChannelHeader title={user.name} />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}
