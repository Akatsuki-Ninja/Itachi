import {
  Channel,
  ChannelHeader,
  ChannelList,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react'
import 'stream-chat-react/dist/css/v2/index.css'

import type { ChatUserType } from '../../types/chat-user-type'

import { useChannelParams } from './hooks/use-channel-params'
import { useMessengerClient } from './hooks/use-messenger-client'

export const Messenger = ({
  channelId,
  token,
  user,
}: {
  channelId: string
  token: string
  user: ChatUserType
}) => {
  const { client, isResolved } = useMessengerClient({
    channelId,
    token,
    user,
  })

  const { filters, sort } = useChannelParams({ channelId })

  if (!client || !isResolved) return null

  return (
    <Chat client={client}>
      <ChannelList
        filters={filters}
        sort={sort}
      />
      <Channel>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  )
}
