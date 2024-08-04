import { Box } from '@chakra-ui/react'
import { APIProvider, Map } from '@vis.gl/react-google-maps'

import { useRequiredAuth } from '@/web/auth'
import { useSubscribeInvitation } from '@/web/invitation'

import { useTrackAuthUserLocation } from '../hooks/use-track-auth-user-location'

import { UsersMarkers } from './users-markers'

const GOOGLE_MAPS_API_KEY = 'AIzaSyCUZf3em7J8q8WkWOfjJ1B9c5N1aKrDiVI'

export const WorldMapPage = () => {
  const { location } = useTrackAuthUserLocation()

  const user = useRequiredAuth()
  const { data } = useSubscribeInvitation({
    receiverId: user.id,
    refetchInterval: 3000,
  })
  console.log(data)

  return (
    <Box
      h={'100vh'}
      w={'100vw'}
    >
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        {location ? (
          <Map
            defaultCenter={location}
            defaultZoom={14}
            mapId={'map'}
          >
            <UsersMarkers />
          </Map>
        ) : null}
      </APIProvider>
    </Box>
  )
}
