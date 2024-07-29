import { Box } from '@chakra-ui/react'
import { APIProvider, Map } from '@vis.gl/react-google-maps'

import { useTrackAuthUserLocation } from '../hooks/use-track-auth-user-location'

import { UsersMarkers } from './users-markers'

const GOOGLE_MAPS_API_KEY = 'AIzaSyCUZf3em7J8q8WkWOfjJ1B9c5N1aKrDiVI'

export const WorldMapPage = () => {
  const { location } = useTrackAuthUserLocation()

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
