import { findUsersLocations as findUsersLocationsInStore } from '@/store'

import type { UserLocationDto } from '../dto/user-location-dto'

export const findUsersLocations = async (): Promise<UserLocationDto[]> => {
  return await findUsersLocationsInStore()
}
