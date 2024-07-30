import type { Location } from '@/common'
import {
  getSession,
  saveUserLocation as saveUserLocationInStore,
} from '@/store'

import type { UserLocationDto } from '../dto/user-location-dto'

export const saveUserLocation = async ({
  location,
  userId,
}: {
  location: Location
  userId: string
}): Promise<UserLocationDto> => {
  await getSession()

  return await saveUserLocationInStore({
    location,
    userId,
  })
}
