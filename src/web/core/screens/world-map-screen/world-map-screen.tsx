import { Box } from '@chakra-ui/react'
import { useEffect, useMemo, useState } from 'react'
import {
  useListenUsersLocation,
  useSaveAuthUserLocation,
} from 'src/web/user-location'

import type { UserEntityLike } from '@/core'
import { useGetFetchedAuth } from '@/web/auth'
import { type Coords, Map, useLocation } from '@/web/common'
import { getUserPreview } from '@/web/user'

import { UserMarker } from './user-marker'

const GOOGLE_MAPS_API_KEY = 'AIzaSyCUZf3em7J8q8WkWOfjJ1B9c5N1aKrDiVI'

type Marker = {
  coords: Coords
  user: UserEntityLike
}

export const WorldMapScreen = () => {
  // TODO: if no user, show popup to register as on WorldCard
  const user = useGetFetchedAuth()
  const userPreview = useMemo(() => getUserPreview(user), [user])

  const { location } = useLocation()
  const [markers, setMarkers] = useState<Marker[]>([])
  const { mutate: setAuthUserPosition } = useSaveAuthUserLocation()

  useListenUsersLocation()

  useEffect(() => {
    if (!location) return

    setAuthUserPosition(location)
  }, [setAuthUserPosition, user, location])

  useEffect(() => {
    if (!location) return

    setMarkers([
      {
        coords: location,
        user: userPreview,
      },
    ])
  }, [location, userPreview])

  return (
    <Box
      h={'100vh'}
      w={'100vw'}
    >
      {location ? (
        <Map
          apiKey={GOOGLE_MAPS_API_KEY}
          center={location}
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
