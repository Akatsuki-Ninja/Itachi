import { useMemo } from 'react'

import { useRequiredAuth } from '@/web/auth'
import { createChatUserSignature } from '@/web/room'

import { useRoomIdParam } from './hooks/use-room-id-param'
import { Stream } from './stream'

export const RoomScreen = () => {
  const roomId = useRoomIdParam()
  const user = useRequiredAuth()
  const chatUser = useMemo(() => createChatUserSignature(user), [user])

  return (
    <Stream
      id={roomId}
      user={chatUser}
    />
  )
}
