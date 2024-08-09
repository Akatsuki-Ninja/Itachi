import type { UserLikeDto } from '@/core'
import { authenticate as authenticateInStore } from '@/store'

import type { AuthDto } from '../dto/auth-dto'

import { getAuthUser } from './get-auth-user'

export const authenticate = async ({
  token,
}: AuthDto): Promise<null | UserLikeDto> => {
  await authenticateInStore({ token })

  return await getAuthUser()
}
