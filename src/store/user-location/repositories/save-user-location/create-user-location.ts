import type { Location } from '@/common'
import { query } from '@/database'

import type { UserLocationEntity } from '../../entities/user-location-entity'

const QUERY = `
LET $location = CREATE userLocation CONTENT {
  lat: $location.lat,
  lng: $location.lng
  createdAt: time::now()
};
LET $user = SELECT * FROM user WHERE id = $userId;
LET $locationOf = RELATE $user->locationOf->$location;

SELECT *, array::first(<-locationOf<-user.*) as user FROM $location;
`

export const createUserLocation = async ({
  location,
  userId,
}: {
  location: Location
  userId: string
}): Promise<UserLocationEntity> => {
  // @todo: find latest location
  const [, , , [result]] = await query<
    [null, null, null, [UserLocationEntity]]
  >(QUERY, {
    location,
    userId,
  })

  return result
}
