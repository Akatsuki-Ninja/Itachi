import { query } from '@/database'
import type { UserLocationEntity } from '@/store'

const QUERY = `
SELECT *, user.*  FROM userLocation WHERE deletedAt IS NULL;
`

export const findUsersLocations = async (): Promise<UserLocationEntity[]> => {
  const [result] = await query<[UserLocationEntity[]]>(QUERY)

  return result
}
