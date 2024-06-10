import { getDatabase } from '@/core'

export const close = async (): Promise<void> => {
  const db = await getDatabase()

  return await db.close()
}
