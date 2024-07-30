import type { UserLocationDto } from '@/core'
import {
  deleteUserLocation as deleteUserLocationInStore,
  getSession,
} from '@/store'

export const deleteUserLocation = async ({
  userId,
}: {
  userId: string
}): Promise<UserLocationDto> => {
  await getSession()

  return await deleteUserLocationInStore({ userId })
}
