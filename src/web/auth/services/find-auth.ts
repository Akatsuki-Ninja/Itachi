import { findAuthUser } from '@/database'
import { authenticate } from '@/web/auth'

export const findAuth = async () => {
  if (await authenticate({ required: false })) {
    return await findAuthUser()
  }

  return null
}
