import { getSession, query } from '@/database'

export type UserLocation = {
  lat: number
  lng: number
}

export type UserLocationEntity = {
  id: string
  location: UserLocation
}

const QUERY = `
LET location = (UPDATE userLocation SET location = $location);

RELATE $userId->userToLocation->location;

RETURN $location;
`

export const saveUserLocation = async ({
  location,
  userId,
}: {
  location: UserLocation
  userId: string
}): Promise<UserLocationEntity> => {
  await getSession()

  const [[userPositionEntity]] = await query<[[UserLocationEntity]]>(QUERY, {
    location,
    userId,
  })

  return userPositionEntity
}
