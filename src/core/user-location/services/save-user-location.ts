import { query, requireAuthentication } from '@/core'

export type UserLocation = {
  lat: number
  lng: number
}

export type UserLocationEntity = {
  id: string
  location: UserLocation
}

// @todo: make it via graph link
const QUERY =
  'UPDATE type::thing("userLocation", $userId) SET location = $location;'

export const saveUserLocation = async ({
  location,
  userId,
}: {
  location: UserLocation
  userId: string
}): Promise<UserLocationEntity> => {
  await requireAuthentication()

  const [[userPositionEntity]] = await query<[[UserLocationEntity]]>(QUERY, {
    location,
    userId,
  })

  return userPositionEntity
}
