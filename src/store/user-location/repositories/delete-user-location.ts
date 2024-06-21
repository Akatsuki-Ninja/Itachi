import { query } from '@/database'

const QUERY = `
LET userLocation = (SELECT * FROM $userId->userToLocation->userLocation);

DELETE $userId->userLocation->userLocation.id;
DELETE FROM userLocation WHERE id = $userId->userLocation.id;

RETURN userLocation;
`

export const deleteUserLocation = async ({
  userId,
}: {
  userId: string
}): Promise<string> => {
  const [[result]] = await query<[[string]]>(QUERY, {
    userId,
  })

  return result
}
