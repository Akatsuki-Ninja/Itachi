import { Box } from '@chakra-ui/react'

import { Chat } from '@/web/streaming'
import { cutEntityId } from '@/database'

import { roomRoute } from '../../routes/room-route'

export const RoomScreen = () => {
  const { roomId } = roomRoute.useParams()

  const entityId = cutEntityId(roomId)

  return (
    <Box>
      <Chat channelId={entityId} />
    </Box>
  )
}
