import { useCreateChatClient } from 'stream-chat-react'
import { useEffect } from 'react'

import { useProgressStatus } from '@/web/common'

import { STREAMING_API_KEY } from '../../../services/api-key'
import type { ChatUserType } from '../../../types/chat-user-type'

export const useMessengerClient = ({
  channelId,
  token,
  user,
}: {
  channelId: string
  token: string
  user: ChatUserType
}) => {
  const client = useCreateChatClient({
    apiKey: STREAMING_API_KEY,
    tokenOrProvider: token,
    userData: user,
  })

  const { isIdle, isResolved, setResolved } = useProgressStatus()

  useEffect(() => {
    if (client && isIdle) {
      client.channel('messaging', channelId).create().then(setResolved)
    }
  }, [setResolved, channelId, client, isIdle])

  return { client, isResolved }
}
