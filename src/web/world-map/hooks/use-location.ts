import { useEffect, useState } from 'react'

import type { DefaultEmptyType } from '@/common'

type Location = {
  lat: number
  lng: number
}

export const useLocation = (defaultLocation?: Location) => {
  const [location, setLocation] =
    useState<DefaultEmptyType<Location>>(defaultLocation)

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        setLocation({
          lat,
          lng,
        })
      },
      console.error
    )

    return () => {
      navigator.geolocation.clearWatch(watchId)
    }
  }, [setLocation])

  return location
}
