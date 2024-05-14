import { useMemo } from 'react'
import type { ChannelFilters, ChannelSort } from 'stream-chat'
import type { DefaultStreamChatGenerics } from 'stream-chat-react'

export const useChannelParams = ({ channelId }: { channelId: string }) => {
  const filters = useMemo(
    (): ChannelFilters<DefaultStreamChatGenerics> => ({
      id: {
        $eq: channelId,
      },
      type: 'messaging',
    }),
    [channelId]
  )
  const sort = useMemo(
    (): ChannelSort<DefaultStreamChatGenerics> => ({
      last_message_at: -1,
    }),
    []
  )

  return { filters, sort }
}
