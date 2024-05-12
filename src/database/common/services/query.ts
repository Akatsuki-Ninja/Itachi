import { getDatabase } from '@/database'

export const query = async <T>(
  queryString: string,
  vars?: any
): Promise<[[T]]> => {
  const db = await getDatabase()

  return db.query<any>(queryString, vars)
}
