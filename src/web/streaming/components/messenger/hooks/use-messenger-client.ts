import { useCreateChatClient } from 'stream-chat-react'

import { STREAMING_API_KEY } from '../../../services/api-key'
import type { ChatUserType } from '../../../types/chat-user-type'

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
