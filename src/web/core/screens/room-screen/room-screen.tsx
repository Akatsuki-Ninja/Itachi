import { Stream } from '@/web/streaming'

import { useChatUserFromAuth } from './hooks/use-chat-user'
import { useRoomId } from './hooks/use-room-id'

export const RoomScreen = () => {
  const user = useChatUserFromAuth()
  const roomId = useRoomId()

  return (
    <Stream
      id={roomId}
      user={user}
    />
  )
}
