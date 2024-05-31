import { query } from '../../common/services/query'

export type RoomEntity = {
  id: string
}

export const createRoom = async () => {
  const [[roomEntity]] = await query<RoomEntity>(`CREATE room;`)

  return roomEntity
}
