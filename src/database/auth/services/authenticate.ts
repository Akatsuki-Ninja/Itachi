import { getDatabase } from '../../common/services/database.ts'

export const authenticate = async (token: string) => {
  const db = await getDatabase()

  return db.authenticate(token)
}
