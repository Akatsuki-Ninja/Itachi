import { useMemo, useRef } from 'react'

import type { ChatUserType } from '../../../types/chat-user-type'

import { createVideoClient } from './create-video-client'

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
