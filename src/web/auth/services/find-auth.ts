import { authenticate, findAuthUser } from '@/database'

import { getToken, removeToken } from '../library/manage-token.ts'

export const findAuth = async () => {
  const token = getToken()

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
