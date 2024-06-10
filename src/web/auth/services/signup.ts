import {
  register,
  type RegisterCredentials,
  type TemporalRegisterCredentials,
} from '@/core'

import { saveToken } from '../library/manage-token'

export const signup = async (
  credentials: RegisterCredentials | TemporalRegisterCredentials
) => {
  const token = await register(credentials)

  saveToken(token)

  return token
}
