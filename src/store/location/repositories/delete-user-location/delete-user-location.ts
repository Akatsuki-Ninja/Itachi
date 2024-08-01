import { query } from '@/database'
import type { UserLocationEntity } from '@/store'

import type { UserLocationRawEntity } from '../../entities/user-location-entity'
import { deserializeLocation } from '../../library/location-normalizer'

const QUERY = `
BEGIN;

LET $id = type::thing("userLocation", $userId);

LET $existedUserLocation = SELECT * FROM ONLY userLocation WHERE id = $id LIMIT 1;
IF !$existedUserLocation {
  THROW "Location with id " + $id + " doesn't exist.";
};

LET $currentDate = time::now();
LET $userLocation = INSERT INTO userLocation {
  id: $existedUserLocation.id,
  updatedAt: $currentDate,
  deletedAt: $currentDate,
} ON DUPLICATE KEY UPDATE deletedAt = $currentDate, updatedAt = $currentDate;

RETURN SELECT *, user.* as user FROM ONLY $userLocation LIMIT 1;

COMMIT;
`

type DeleteUserLocationValues = {
  userId: string
}

export const deleteUserLocation = async ({
  userId,
}: DeleteUserLocationValues): Promise<UserLocationEntity> => {
  const [{ location, ...rest }] = await query<[UserLocationRawEntity]>(QUERY, {
    userId,
  })

  return {
    ...rest,
    location: deserializeLocation(location),
  }
}
