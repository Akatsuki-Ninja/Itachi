import { getDatabase } from '@/database'

export const session = async <
  T extends Record<string, unknown>,
>(): Promise<null | T> => {
  const db = await getDatabase()

  return (await db.info<T>()) ?? null
}
