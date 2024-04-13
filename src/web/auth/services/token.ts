import { findToken } from '../library/manage-token'

export const getToken = () => {
  const token = findToken()

  if (!token) {
    throw new Error("Token doesn't exists")
  }

  return token
}
