import { query } from '@/database'

import type { UserLikeEntity } from '../entities/user-like-entity'

const QUERY = `
SELECT * FROM ONLY user WHERE id = $userId LIMIT 1;
`

export type FindUserValues = {
  userId: string
}

export const findUser = async (
  values: FindUserValues
): Promise<null | UserLikeEntity> => {
  const [userEntity] = await query<(null | UserLikeEntity)[]>(QUERY, values)

  return userEntity
}
