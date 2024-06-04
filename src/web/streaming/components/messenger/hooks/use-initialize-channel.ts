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

/**
 * Add dark background for the room page
 *
 * Make chat on full height
 *
 * Wrap video and chat components in a paddings
 *
 * Add room title and ability to copy room link
 *
 * hide header
 * add right border
 * add blurred background
 * think how pick right width the messages section
 */
