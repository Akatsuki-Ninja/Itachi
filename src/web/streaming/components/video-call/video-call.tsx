import { StreamCall, StreamVideo } from '@stream-io/video-react-sdk'
import { useEffect } from 'react'

import type { ChatUserType } from '../../types/chat-user-type'

import { useVideoClient } from './hooks/use-video-client'
import { Participant } from './participant'

export const VideoCall = ({
  callId,
  token,
  user,
}: {
  callId: string
  token: string
  user: ChatUserType
}) => {
  const { call, client } = useVideoClient({
    callId,
    token,
    user: user,
  })

  useEffect(() => {
    call.join({ create: true }).catch(console.error)
  }, [call])

  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <Participant />
      </StreamCall>
    </StreamVideo>
  )
}