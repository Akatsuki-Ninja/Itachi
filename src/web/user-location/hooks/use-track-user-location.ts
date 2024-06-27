import { useCallback, useEffect } from 'react'

import type { DefaultEmptyType, Location } from '@/common'
import {
  useCreateUserLocation,
  useDeleteUserLocation,
} from '@/web/user-location'

export const useTrackUserLocation = ({
  location,
  userId,
}: {
  location: DefaultEmptyType<Location>
  userId: string
}) => {
  const { mutateAsync: createUserLocation } = useCreateUserLocation()
  const { mutateAsync: deleteUserLocation } = useDeleteUserLocation()

  const saveUserLocation = useCallback(
    async ({ location }: { location: Location }) => {
      await deleteUserLocation({ userId })
      await createUserLocation({ location, userId })
    },
    [createUserLocation, deleteUserLocation, userId]
  )

  useEffect(() => {
    if (location) {
      saveUserLocation({ location })
    }
  }, [location, saveUserLocation])

  useEffect(() => {
    deleteUserLocation({ userId })
  }, [deleteUserLocation, userId])
}
