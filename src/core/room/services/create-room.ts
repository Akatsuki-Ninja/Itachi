import { createRoom as createRoomInStore, getSession } from '@/store'

import type { RoomDto } from '../dto/room-dto'

export const createRoom = async (): Promise<RoomDto> => {
  await getSession()

  return await createRoomInStore()
}
