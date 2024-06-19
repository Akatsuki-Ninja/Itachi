import { useEffect } from 'react'

import type { DefaultEmptyType, Location } from '@/common'
import {
  useDeleteUserLocation,
  useSaveAuthUserLocation,
} from '@/web/user-location'

export const useTrackUserLocation = ({
  location,
  userId,
}: {
  location: DefaultEmptyType<Location>
  userId: string
}) => {
  const { mutate: setAuthUserLocation } = useSaveAuthUserLocation()
  const { mutate: deleteAuthUserLocation } = useDeleteUserLocation()

  useEffect(() => {
    if (!location) return

    setAuthUserLocation({ location, userId })

    return () => {
      deleteAuthUserLocation({ userId })
    }
  }, [setAuthUserLocation, deleteAuthUserLocation, location, userId])
}
