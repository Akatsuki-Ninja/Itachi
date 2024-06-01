import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { type TemporalUserEntity, type UserEntity } from '@/database'
import { useAuth } from '@/web/auth'
import { type Coords, Map, useLocation } from '@/web/common'
import {
  useListenUsersLocation,
  useSaveAuthUserLocation,
} from '@/web/world-map'

import { UserMarker } from './user-marker'

const GOOGLE_MAPS_API_KEY = 'AIzaSyCUZf3em7J8q8WkWOfjJ1B9c5N1aKrDiVI'

type Marker = {
  coords: Coords
  user: TemporalUserEntity | UserEntity
}

export const WorldMapScreen = () => {
  const { data: user } = useAuth()

  const { mutate: setAuthUserPosition } = useSaveAuthUserLocation()
  const userLocation = useLocation()
  const [markers, setMarkers] = useState<Marker[]>([])

  useListenUsersLocation()

  useEffect(() => {
    if (!userLocation || !user) return

    setAuthUserPosition(userLocation)

    setMarkers([
      {
        coords: userLocation,
        user,
      },
    ])
  }, [setAuthUserPosition, user, userLocation])

  return (
    <Box
      h={'100vh'}
      w={'100vw'}
    >
      {userLocation ? (
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
      ) : null}
    </Box>
  )
}
