import { getDatabase } from '@/core'

export const kill = async (uuid: string): Promise<void> => {
  const db = await getDatabase()

  return await db.kill(uuid)
}
