import { useEffect, useMemo } from 'react'
import { useChatContext } from 'stream-chat-react'

import { useProgressStatus } from '@/web/common'

export const useInitializeChannel = ({ channelId }: { channelId: string }) => {
  const { client } = useChatContext()

  const { isIdle, isResolved, setResolved } = useProgressStatus()
  const channel = useMemo(
    () => client.channel('messaging', channelId),
    [client, channelId]
  )

  useEffect(() => {
    if (isIdle) {
      channel.create().then(setResolved)
    }
  }, [setResolved, channel, isIdle])

  return { channel, isResolved }
}
