import {
  setAuthUserLocation as setUserLocationInDatabase,
  type UserLocation,
} from '@/core'
import { authenticate } from '@/web/auth'

export async function saveAuthUserLocation(payload: UserLocation) {
  await authenticate()

  return await setUserLocationInDatabase(payload)
}
