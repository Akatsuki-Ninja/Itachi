import { getSession, query } from '@/database'

export type RoomEntity = {
  id: string
}

const QUERY = 'CREATE room;'

export const createRoom = async () => {
  await getSession()

  const [[roomEntity]] = await query<[[RoomEntity]]>(QUERY)

  return roomEntity
}
