import { StreamVideoClient } from '@stream-io/video-react-sdk'

import { ChatUserType } from '../../../types/chat-user-type'
import { STREAMING_API_KEY } from '../../../services/api-key'

export const createVideoClient = ({
  token,
  user,
}: {
  token: string
  user: ChatUserType
}) => {
  return new StreamVideoClient({
    apiKey: STREAMING_API_KEY,
    token,
    user,
  })
}
