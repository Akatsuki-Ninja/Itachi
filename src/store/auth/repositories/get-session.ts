import { session } from '@/database'
import type { UserLikeEntity } from '@/store'

export const getSession = async (): Promise<UserLikeEntity> => {
  const auth = await session<UserLikeEntity>()

  if (auth) {
    return auth
  }

  throw Error('User is not authenticated')
}
