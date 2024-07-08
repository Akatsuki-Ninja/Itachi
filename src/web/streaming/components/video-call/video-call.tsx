import {
  CallControls,
  StreamCall,
  StreamTheme,
  StreamVideo,
} from '@stream-io/video-react-sdk'
import '@stream-io/video-react-sdk/dist/css/styles.css'
import { useEffect } from 'react'

import type { ChatUserType } from '@/web/streaming'

import { useVideoClient } from './hooks/use-video-client'
import { Participants } from './participants'

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
    call.join({ create: true })
  }, [call])

  return (
    <StreamVideo client={client}>
      <StreamTheme>
        <StreamCall call={call}>
          <Participants />
          <CallControls />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  )
}
