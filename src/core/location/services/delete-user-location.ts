import {
  deleteUserLocation as deleteUserLocationInStore,
  getSession,
} from '@/store'

import type { DeleteUserLocationDto } from '../dto/delete-user-location-dto'
import type { UserLocationDto } from '../dto/user-location-dto'

export const deleteUserLocation = async ({
  userId,
}: DeleteUserLocationDto): Promise<UserLocationDto> => {
  await getSession()

  return await deleteUserLocationInStore({ userId })
}
