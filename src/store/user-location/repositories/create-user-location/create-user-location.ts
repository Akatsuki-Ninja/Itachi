import type { Location } from '@/common'
import { query } from '@/database'

import type { UserLocationEntity } from '../../entities/user-location-entity'

const QUERY = `
LET $location = CREATE userLocation CONTENT {
  lat: $location.lat,
  lng: $location.lng,
  createdAt: time::now(),
};

LET $user = SELECT * FROM user WHERE id = $userId;

RELATE $user->userToLocation->$location;

SELECT *, array::first(<-userToLocation<-user.*) as user FROM $location;
`

export const createUserLocation = async ({
  location,
  userId,
}: {
  location: Location
  userId: string
}): Promise<UserLocationEntity> => {
  const [, , , [result]] = await query<
    [null, null, null, UserLocationEntity[]]
  >(QUERY, {
    location,
    userId,
  })

  return result
}
