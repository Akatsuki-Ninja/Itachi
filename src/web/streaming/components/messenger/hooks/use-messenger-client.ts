import { useCreateChatClient } from 'stream-chat-react'

import type { ChatUserType } from '@/web/streaming'

import { STREAMING_API_KEY } from '../../../services/api-key'

export const useMessengerClient = ({
  token,
  user,
}: {
  token: string
  user: ChatUserType
}) => {
  const client = useCreateChatClient({
    apiKey: STREAMING_API_KEY,
    tokenOrProvider: token,
    userData: user,
  })

  return { client }
}
