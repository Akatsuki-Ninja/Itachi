import { session } from '@/core'

export const getAuthentication = async () => {
  const auth = await session()

  if (!auth) {
    throw Error('User is not authenticated')
  }

  return auth
}
