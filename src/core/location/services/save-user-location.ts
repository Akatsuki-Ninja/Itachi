import {
  getSession,
  saveUserLocation as saveUserLocationInStore,
} from '@/store'

import type { SaveUserLocationDto } from '../dto/save-user-location-dto'
import type { UserLocationDto } from '../dto/user-location-dto'

export const saveUserLocation = async ({
  location,
  userId,
}: SaveUserLocationDto): Promise<UserLocationDto> => {
  await getSession()

  return await saveUserLocationInStore({
    location,
    userId,
  })
}
