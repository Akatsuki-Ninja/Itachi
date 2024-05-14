import { authenticate, findAuthUser } from '@/core'

import { findToken } from '../library/manage-token'

export const findAuth = async () => {
  const token = findToken()

  if (token) {
    await authenticate(token)

    return await findAuthUser()
  }

  return null
}
