import { getDatabase } from '@/database'

export type QueryResult =
  | boolean
  | null
  | number
  | QueryResult[]
  | Record<number | string | symbol, unknown>
  | string
  | symbol

export const query = async <T extends QueryResult[]>(
  queryString: string,
  vars?: any
): Promise<T> => {
  const db = await getDatabase()

  return await db.query<T>(queryString, vars)
}
