import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { Coords, Map } from '@/web/common'
import { useAuth } from '@/web/auth'
import { TemporalUserEntity, UserEntity } from '@/database'

import { UserMarker } from './user-marker.tsx'

const GOOGLE_MAPS_API_KEY = 'AIzaSyDtGCQDtjV6pABs-8PctcMWAj3ouYPM9vE'

type Marker = {
  coords: Coords
  user: TemporalUserEntity | UserEntity
}

export const WorldMapScreen = () => {
  const { data: user } = useAuth()

  const [userLocation, setUserLocation] = useState<Coords | null | undefined>(
    null
  )
  const [markers, setMarkers] = useState<Marker[]>([])

  useEffect(() => {
    if (!user) return

    const watchId = navigator.geolocation.watchPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        setUserLocation({
          lat,
          lng,
        })
        setMarkers([
          {
            coords: {
              lat,
              lng,
            },
            user,
          },
        ])
      },
      console.error
    )

    return () => {
      navigator.geolocation.clearWatch(watchId)
      setMarkers([])
    }
  }, [user])

  return (
    <Box
      h={'100vh'}
      w={'100vw'}
    >
      {userLocation && (
        <Map
          apiKey={GOOGLE_MAPS_API_KEY}
          center={userLocation}
        >
          {markers.map((marker) => (
            <UserMarker
              coords={marker.coords}
              key={`${marker.coords.lat}-${marker.coords.lng}`}
              user={marker.user}
            />
          ))}
        </Map>
      )}
    </Box>
  )
}