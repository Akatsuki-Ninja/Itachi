import {
  setAuthUserPosition as setUserPositionInDatabase,
  type UserPosition,
} from '@/database'
import { authenticate } from '@/web/auth'

export async function setAuthUserPosition(payload: UserPosition) {
  await authenticate()

  return await setUserPositionInDatabase(payload)
}
