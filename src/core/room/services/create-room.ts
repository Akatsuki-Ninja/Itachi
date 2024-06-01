import { query, requireAuthentication } from '@/core'

export type RoomEntity = {
  id: string
}

const QUERY = 'CREATE room;'

export const createRoom = async () => {
  await requireAuthentication()

  const [[roomEntity]] = await query<[[RoomEntity]]>(QUERY)

  return roomEntity
}
