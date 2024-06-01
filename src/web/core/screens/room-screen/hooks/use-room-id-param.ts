import { useMemo } from 'react'

import { cutEntityId } from '@/core'

import { roomRoute } from '../../../routes/room-route'

export const useRoomIdParam = (): string => {
  const { roomId } = roomRoute.useParams()

  return useMemo(() => cutEntityId(roomId), [roomId])
}
