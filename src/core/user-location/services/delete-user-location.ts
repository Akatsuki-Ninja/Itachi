import {
  deleteUserLocation as deleteUserLocationInStore,
  getSession,
} from '@/store'

export const deleteUserLocation = async ({
  userId,
}: {
  userId: string
}): Promise<string> => {
  await getSession()

  return await deleteUserLocationInStore({ userId })
}
