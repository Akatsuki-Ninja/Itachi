import { type SignUpDto, signup as signupInCore } from '@/core'

import { saveToken } from '../library/manage-token'

export const signup = async (credentials: SignUpDto) => {
  const token = await signupInCore(credentials)

  saveToken(token)

  return token
}
