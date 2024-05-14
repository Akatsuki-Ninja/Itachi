import { Stream } from '@/web/streaming'

import { useChatUserFromAuth } from './hooks/use-chat-user'
import { useRoomIdParam } from './hooks/use-room-id-param'

export const RoomScreen = () => {
  const user = useChatUserFromAuth()
  const roomId = useRoomIdParam()

  return (
    <Stream
      id={roomId}
      user={user}
    />
  )
}
