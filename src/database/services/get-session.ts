import { session } from '@/database'

export const getSession = async () => {
  const auth = await session()

  if (auth) {
    return auth
  }

  throw Error('User is not authenticated')
}
