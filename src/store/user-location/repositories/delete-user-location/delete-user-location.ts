import { query } from '@/database'
import type { UserLocationEntity } from '@/store'

const QUERY = `
LET $user = array::first(SELECT * FROM user WHERE id = $userId);

DELETE $user->userToLocation->userLocation;

RETURN $user->userToLocation->userLocation; 
`

export const deleteUserLocation = async ({
  userId,
}: {
  userId: string
}): Promise<UserLocationEntity[]> => {
  const [, , result] = await query<[null, null, UserLocationEntity[]]>(QUERY, {
    userId,
  })

  return result
}
