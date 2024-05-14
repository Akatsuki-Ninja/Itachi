import {
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react'

import type { ChatChannel } from './hooks/use-chat-client'

export const Messenger = ({ channel }: { channel: ChatChannel }) => {
  return (
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  )
}
