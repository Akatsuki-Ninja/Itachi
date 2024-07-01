import type { UserLocationDto } from '@/core'
import {
  deleteUserLocation as deleteUserLocationInStore,
  getSession,
} from '@/store'

export const deleteUserLocation = async ({
  userId,
}: {
  userId: string
}): Promise<UserLocationDto> => {
  await getSession()

  const userLocation = await deleteUserLocationInStore({ userId })

  return {
    ...userLocation,
    location: {
      lat: userLocation.location[1],
      lng: userLocation.location[0],
    },
  }
}
