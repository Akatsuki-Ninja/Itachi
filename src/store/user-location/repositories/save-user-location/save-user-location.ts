import { query } from '@/database'
import type { LocationPoint, UserLocationEntity } from '@/store'

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
  location,
  userId,
}: {
  location: LocationPoint
  userId: string
}): Promise<UserLocationEntity> => {
  const [result] = await query<[UserLocationEntity]>(QUERY, {
    location,
    userId,
  })

  return result
}
