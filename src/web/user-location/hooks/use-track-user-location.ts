import { useEffect } from 'react'

import type { DefaultEmptyType } from '@/common'
import type { UserLocation } from '@/core'
import {
  useDeleteUserLocation,
  useSaveAuthUserLocation,
} from '@/web/user-location'

export const useTrackUserLocation = ({
  location,
  userId,
}: {
  location: DefaultEmptyType<UserLocation>
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
