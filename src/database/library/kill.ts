import { getDatabase } from '@/database'

export const kill = async (uuid: string): Promise<void> => {
  const db = await getDatabase()

  return await db.kill(uuid)
}
