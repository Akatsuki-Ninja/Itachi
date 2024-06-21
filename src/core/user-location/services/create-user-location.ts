import type { Location } from '@/common'
import {
  createUserLocation as createUserLocationInStore,
  getSession,
} from '@/store'

import type { UserLocationDto } from '../dto/user-location-dto'

export const createUserLocation = async ({
  location,
  userId,
}: {
  location: Location
  userId: string
}): Promise<UserLocationDto> => {
  await getSession()

  return await createUserLocationInStore({ location, userId })
}
