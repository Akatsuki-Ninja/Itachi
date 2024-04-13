import { authenticate, findAuthUser } from '@/database'

import { findToken, removeToken } from '../library/manage-token'

export const findAuth = async () => {
  const token = findToken()

  try {
    if (token) {
      await authenticate(token)
      return await findAuthUser()
    }
  } catch (error) {
    removeToken()

    throw error
  }

  return null
}
