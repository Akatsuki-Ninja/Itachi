import { register, type SignUpDto } from '@/core'

import { saveToken } from '../library/manage-token'

export const signup = async (credentials: SignUpDto) => {
  const token = await register(credentials)

  saveToken(token)

  return token
}
