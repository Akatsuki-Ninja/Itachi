import { query } from '@/database'

import type { UserLikeEntity } from '../entities/user-like-entity'

const QUERY = `
  SELECT * FROM user WHERE id = $userId;
`

export const findUser = async ({
  userId,
}: {
  userId: string
}): Promise<null | UserLikeEntity> => {
  const [[userEntity]] = await query<[[null | UserLikeEntity]]>(QUERY, {
    userId,
  })

  return userEntity
}
