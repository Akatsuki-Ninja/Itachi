import { getDatabase } from '@/database'

export const close = async (): Promise<void> => {
  const db = await getDatabase()

  return await db.close()
}
