import { query, requireSession } from '@/database'

export type RoomEntity = {
  id: string
}

const QUERY = 'CREATE room;'

export const createRoom = async () => {
  await requireSession()

  const [[roomEntity]] = await query<[[RoomEntity]]>(QUERY)

  return roomEntity
}
