import { findAuthUser } from '@/core'

import { findToken } from '../library/manage-token'

export const findAuth = async () => {
  const token = findToken()

  if (token) {
    return await findAuthUser(token)
  }

  return null
}
