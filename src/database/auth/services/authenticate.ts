import { getDatabase } from '../../common/services/database'

export const authenticate = async (token: string) => {
  const db = await getDatabase()

  return db.authenticate(token)
}
