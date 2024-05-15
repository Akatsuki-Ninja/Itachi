import { Channel as StreamChannel } from 'stream-chat-react'
import type { ReactNode } from 'react'

import { useInitializeChannel } from './hooks/use-initialize-channel'

export const Channel = ({
  channelId,
  children,
}: {
  channelId: string
  children: ReactNode
}) => {
  const { channel } = useInitializeChannel({ channelId })

  return <StreamChannel channel={channel}>{children}</StreamChannel>
}
