import { Box } from '@chakra-ui/react'
import { useMemo } from 'react'

import { useRequiredAuth } from '@/web/auth'
import { Map } from '@/web/common'
import { useLiveUsersLocations } from '@/web/user-location'

import { createUsersMarkers } from './create-users-markers'
import { useLiveAuthUserLocation } from './use-live-auth-user-location'
import { UserMarker } from './user-marker'

const GOOGLE_MAPS_API_KEY = 'AIzaSyCUZf3em7J8q8WkWOfjJ1B9c5N1aKrDiVI'

export const WorldMapScreen = () => {
  const { location } = useLiveAuthUserLocation()

  const { liveLocations } = useLiveUsersLocations()
  const user = useRequiredAuth()
  const markers = useMemo(
    () =>
      createUsersMarkers({
        currentUser: user,
        locations: liveLocations,
      }),
    [liveLocations, user]
  )

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
