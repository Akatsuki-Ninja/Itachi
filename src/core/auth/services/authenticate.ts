import type { UserLikeDto } from '@/core'
import { authenticate as authenticateInStore } from '@/store'

import { getAuthUser } from './get-auth-user'

export const authenticate = async (
  token: string
): Promise<null | UserLikeDto> => {
  await authenticateInStore({ token })

  return await getAuthUser()
}
