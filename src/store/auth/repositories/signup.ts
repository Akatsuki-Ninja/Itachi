import { signup as signUpInDb } from '@/database'

import { UserScope } from '../library/user-scope'

export type TemporalRegisterCredentials = {
  name?: string
}

export type RegisterCredentials = {
  email: string
  name?: string
  password: string
}

export const signup = async ({
  credentials,
  scope,
}: {
  credentials: RegisterCredentials | TemporalRegisterCredentials
  scope: UserScope
}) => {
  return await signUpInDb({
    scope,
    ...credentials,
  })
}
