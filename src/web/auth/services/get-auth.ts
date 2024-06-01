import { getAuthUser } from '@/database'
import { authenticate } from '@/web/auth'

export const getAuth = async () => {
  await authenticate({ required: true })

  return await getAuthUser()
}
