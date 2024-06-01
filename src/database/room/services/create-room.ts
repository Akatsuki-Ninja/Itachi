import { query, requireAuthentication } from '@/database'

export type RoomEntity = {
  id: string
}

const QUERY = 'CREATE room;'

export const createRoom = async () => {
  await requireAuthentication()

  const [[roomEntity]] = await query<[[RoomEntity]]>(QUERY)

  return roomEntity
}
