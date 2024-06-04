import { createRoom as createRoomInDatabase } from '@/core'
import { authenticate } from '@/web/auth'

export const createRoom = async () => {
  await authenticate()

  return await createRoomInDatabase()
}
