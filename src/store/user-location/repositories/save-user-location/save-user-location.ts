import type { Location } from '@/common'
import { query } from '@/database'
import type { UserLocationEntity } from '@/store'

import type { UserLocationRawEntity } from '../../entities/user-location-entity'
import { deserializeLocation } from '../../library/location-normalizer'

const QUERY = `
BEGIN;

LET $currentDate = time::now();
LET $id = type::thing("userLocation", $userId);
LET $userLocation = INSERT INTO userLocation {
  id: $id,
  location: $location,
  user: <record>$userId,
  createdAt: $currentDate,
  updatedAt: $currentDate,
  deletedAt: null,
} ON DUPLICATE KEY UPDATE location = $input.location, deletedAt = null, updatedAt = $currentDate;

RETURN SELECT *, user.* as user FROM ONLY $userLocation LIMIT 1;

COMMIT;
`

export const saveUserLocation = async ({
  location: { lat, lng },
  userId,
}: {
  location: Location
  userId: string
}): Promise<UserLocationEntity> => {
  const [{ location, ...rest }] = await query<[UserLocationRawEntity]>(QUERY, {
    location: [lng, lat],
    userId,
  })

  return {
    ...rest,
    location: deserializeLocation(location),
  }
}
