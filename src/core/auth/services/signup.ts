import { signup as signUpInDB, type UserToken } from '@/store'

import type { SignUpDto } from '../dto/sign-up-dto'
import { getScopeFromCredentials } from '../library/get-scope'

export const signup = async (credentials: SignUpDto): Promise<UserToken> => {
  return await signUpInDB({
    credentials,
    scope: getScopeFromCredentials(credentials),
  })
}
