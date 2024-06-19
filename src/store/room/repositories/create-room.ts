import { query } from '@/database'

import type { RoomEntity } from '../entities/room-entity'

const QUERY = 'CREATE room;'

export const createRoom = async () => {
  const [[roomEntity]] = await query<[[RoomEntity]]>(QUERY)

  return roomEntity
}
