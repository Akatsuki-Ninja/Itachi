import { useEffect, useState } from 'react'

import type { DefaultEmptyType, Location } from '@/common'
import { useProgressStatus } from '@/web/common'

export const useLocation = (defaultLocation?: Location) => {
  const [location, setLocation] =
    useState<DefaultEmptyType<Location>>(defaultLocation)
  const [error, setError] =
    useState<DefaultEmptyType<GeolocationPositionError>>(undefined)
  const {
    isIdle,
    isProcessing,
    isRejected,
    isResolved,
    setProcessing,
    setRejected,
    setResolved,
    status,
  } = useProgressStatus()

  useEffect(() => {
    setProcessing()
    setError(null)

    const watchId = navigator.geolocation.watchPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        setLocation({
          lat,
          lng,
        })

        setResolved()
      },
      (error) => {
        setRejected()
        setError(error)
      }
    )

    return () => {
      navigator.geolocation.clearWatch(watchId)
    }
  }, [setLocation, setProcessing, setRejected, setResolved])

  return {
    error,
    isIdle,
    isProcessing,
    isRejected,
    isResolved,
    location,
    status,
  }
}
