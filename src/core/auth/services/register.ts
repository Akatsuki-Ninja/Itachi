import { signup } from '@/store'

import type { SignUpDto } from '../dto/sign-up-dto'
import { getScopeFromCredentials } from '../library/get-scope'

export const register = async (credentials: SignUpDto): Promise<string> => {
  return await signup({
    credentials,
    scope: getScopeFromCredentials(credentials),
  })
}
