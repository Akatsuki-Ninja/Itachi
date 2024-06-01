import { query, requireSession } from '@/database'

export type UserLocation = {
  lat: number
  lng: number
}

export type UserLocationEntity = {
  id: string
  position: UserLocation
}

const QUERY =
  'UPDATE type::thing("userLocation", type::thing("user", $auth)) SET location = $location;'

export const setAuthUserLocation = async (
  location: UserLocation
): Promise<UserLocationEntity> => {
  await requireSession()

  const [[userPositionEntity]] = await query<[[UserLocationEntity]]>(QUERY, {
    location,
  })

  return userPositionEntity
}
