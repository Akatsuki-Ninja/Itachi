import { getAuthentication, query } from '@/core'

export type RoomEntity = {
  id: string
}

const QUERY = 'CREATE room;'

export const createRoom = async () => {
  await getAuthentication()

  const [[roomEntity]] = await query<[[RoomEntity]]>(QUERY)

  return roomEntity
}
