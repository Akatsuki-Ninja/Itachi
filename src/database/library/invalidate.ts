import { getDatabase } from '@/database'

export const invalidate = async (): Promise<void> => {
  const db = await getDatabase()

  return await db.invalidate()
}
