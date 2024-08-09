import { query } from '@/database'

import type { RoomEntity } from '../entities/room-entity'

const QUERY = `
BEGIN;

LET $room = CREATE room;
RETURN SELECT * FROM ONLY $room LIMIT 1;

COMMIT;
`

export const createRoom = async (): Promise<RoomEntity> => {
  const [roomEntity] = await query<[RoomEntity]>(QUERY)

  return roomEntity
}
