import { authenticate as authenticateInDatabase } from '@/database'

import { getToken, removeToken } from '../library/manage-token'

export const authenticate = async (
  { required = true }: { required?: boolean } = { required: true }
) => {
  const token = getToken({ required })

  if (token) {
    try {
      await authenticateInDatabase(token)
    } catch (error) {
      removeToken()

      throw error
    }
  }

  return token
}
