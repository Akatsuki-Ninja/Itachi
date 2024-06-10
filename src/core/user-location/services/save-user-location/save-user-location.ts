import type { UserEntity } from '@/core'
import { getSession, query } from '@/database'

export type UserLocation = {
  lat: number
  lng: number
}

export type UserLocationEntity = {
  id: string
  lat: number
  lng: number
}

export type UserLocationResult = UserLocationEntity & {
  user: UserEntity
}

const QUERY = `
LET $location = CREATE userLocation CONTENT {
  lat: $location.lat,
  lng: $location.lng
};
LET $user = SELECT * FROM user WHERE id = $userId;
LET $locationOf = RELATE $user->locationOf->$location;

SELECT *, array::first(<-locationOf<-user.*) as user FROM $location;
`

export const saveUserLocation = async ({
  location,
  userId,
}: {
  location: UserLocation
  userId: string
}): Promise<UserLocationResult> => {
  await getSession()

  const [, , , [result]] = await query<
    [null, null, null, [UserLocationResult]]
  >(QUERY, {
    location,
    userId,
  })

  return result
}
