import { useMemo, useRef } from 'react'

import { createVideoClient } from '../../../services/create-video-client'
import type { ChatUserType } from '../../../types/chat-user-type'

export const useVideoClient = ({
  callId,
  token,
  user,
}: {
  callId: string
  token: string
  user: ChatUserType
}) => {
  const { current: client } = useRef(createVideoClient({ token, user }))

  const call = useMemo(() => {
    return client.call('default', callId)
  }, [client, callId])

  return { call, client }
}
