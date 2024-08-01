import { useEffect, useRef } from 'react'
import { useDeleteUserLocation, useSaveUserLocation } from 'src/web/location'

import type { DefaultEmptyType, Location } from '@/common'

export const useTrackUserLocation = ({
  location,
  userId,
}: {
  location: DefaultEmptyType<Location>
  userId: string
}) => {
  const { mutateAsync: saveUserLocation } = useSaveUserLocation()
  const { mutateAsync: deleteUserLocation } = useDeleteUserLocation()
  const savePromise = useRef<DefaultEmptyType<Promise<any>>>()

  useEffect(() => {
    if (location) {
      savePromise.current = saveUserLocation({ location, userId })
    }
  }, [location, saveUserLocation, userId])

  useEffect(() => {
    // @todo: check call when browser/tab closed
    // @todo: think how track if user leave page, component, tab, browser
    return () => {
      savePromise.current?.then(() => {
        deleteUserLocation({ userId })
      })
    }
  }, [deleteUserLocation, userId])
}
