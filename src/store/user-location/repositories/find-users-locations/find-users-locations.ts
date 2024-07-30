import { query } from '@/database'
import type { UserLocationEntity } from '@/store'
import type { UserLocationRawEntity } from '@/store/user-location/entities/user-location-entity'
import { deserializeLocation } from '@/store/user-location/library/location-normalizer'

const QUERY = `
SELECT *, user.*  FROM userLocation WHERE deletedAt IS NULL;
`

export const findUsersLocations = async (): Promise<UserLocationEntity[]> => {
  const [result] = await query<[UserLocationRawEntity[]]>(QUERY)

  return result.map(({ location, ...rest }) => ({
    ...rest,
    location: deserializeLocation(location),
  }))
}
