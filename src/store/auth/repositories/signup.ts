import { signup as signUpInDb } from '@/database'

import { UserScope } from '../library/user-scope'
import type { UserToken } from '../types/user-token'

export type TemporalSignupValues = {
  name?: string
}

export type SingupValues = {
  email: string
  name?: string
  password: string
}

export const signup = async ({
  credentials,
  scope,
}: {
  credentials: SingupValues | TemporalSignupValues
  scope: UserScope
}): Promise<UserToken> => {
  return await signUpInDb({
    scope,
    ...credentials,
  })
}
