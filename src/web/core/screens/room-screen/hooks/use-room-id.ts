import { useMemo } from 'react'

import { cutEntityId } from '@/database'

import { roomRoute } from '../../../routes/room-route'

export const useRoomId = (): string => {
  const { roomId } = roomRoute.useParams()

  return useMemo(() => cutEntityId(roomId), [roomId])
}
