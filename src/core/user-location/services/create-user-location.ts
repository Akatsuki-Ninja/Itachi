import {
  createUserLocation as createUserLocationInStore,
  getSession,
  type LocationEntity,
} from '@/store'

import type { UserLocationDto } from '../dto/user-location-dto'

export const createUserLocation = async ({
  location,
  userId,
}: {
  location: LocationEntity
  userId: string
}): Promise<UserLocationDto> => {
  await getSession()

  return await createUserLocationInStore({ location, userId })
}
