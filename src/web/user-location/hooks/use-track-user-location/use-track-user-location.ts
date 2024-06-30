import { useEffect, useRef } from 'react'

import type { DefaultEmptyType, Location } from '@/common'
import { useDeleteUserLocation, useSaveUserLocation } from '@/web/user-location'

export const useTrackUserLocation = ({
  location,
  userId,
}: {
  location: DefaultEmptyType<Location>
  userId: string
}) => {
  const { mutateAsync: saveUserLocation } = useSaveUserLocation()
  const { mutateAsync: deleteUserLocation } = useDeleteUserLocation()
  const saveWaitPromise = useRef<DefaultEmptyType<Promise<any>>>()

  useEffect(() => {
    if (location) {
      saveWaitPromise.current = saveUserLocation({ location, userId })
    }
  }, [location, saveUserLocation, userId])

  useEffect(() => {
    return () => {
      saveWaitPromise.current?.then(() => {
        deleteUserLocation({ userId })
      })
    }
  }, [deleteUserLocation, userId])
}
