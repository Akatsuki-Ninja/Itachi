import { findUsersLocations as findUsersLocationsInStore } from '@/store'

import type { UserLocationDto } from '../dto/user-location-dto'

export const findUsersLocations = async (): Promise<UserLocationDto[]> => {
  const usersLocations = await findUsersLocationsInStore()

  return usersLocations.map((userLocation) => ({
    ...userLocation,
    location: {
      lat: userLocation.location[1],
      lng: userLocation.location[0],
    },
  }))
}
