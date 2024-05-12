import { createRoom as createRoomInDatabase } from '@/database'
import { authenticate } from '@/web/auth'

export const createRoom = async () => {
  await authenticate()

  return await createRoomInDatabase()
}
