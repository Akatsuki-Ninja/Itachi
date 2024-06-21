import { useEffect } from 'react'

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
  const { mutate: createUserLocation } = useCreateUserLocation()
  const { mutate: deleteUserLocation } = useDeleteUserLocation()

  useEffect(() => {
    if (!location) return

    createUserLocation({ location, userId })

    return () => {
      deleteUserLocation({ userId })
    }
  }, [createUserLocation, deleteUserLocation, location, userId])
}
