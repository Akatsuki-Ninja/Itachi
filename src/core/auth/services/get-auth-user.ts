import type { UserLikeDto } from '@/core'
import { findUser, getSession } from '@/store'

export const getAuthUser = async (): Promise<UserLikeDto> => {
  const { id } = await getSession()

  const user = await findUser({ userId: id })

  if (user) {
    return user
  }

  throw new Error('Could not find authenticated user')
}
