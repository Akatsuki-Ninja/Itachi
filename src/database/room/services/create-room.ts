import { query } from '../../common/services/query'

export type RoomEntity = {
  id: string
}

export const createRoom = async () => {
  const [[room]] = await query<RoomEntity>(`CREATE room;`)

  return room
}
