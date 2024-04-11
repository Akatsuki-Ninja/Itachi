import { Box } from '@chakra-ui/react'
import { ReactNode, useEffect, useState } from 'react'

import { MapContext } from './hooks/use-map'
import { Coords, createMap, Map as MapInstance } from './utils/create-map'

type MapProps = {
  apiKey: string
  center?: Coords | null | undefined
  children?: ReactNode
  zoom?: null | number | undefined
}

export const Map = ({ apiKey, center, children, zoom }: MapProps) => {
  const [map, setMap] = useState<MapInstance | null | undefined>(undefined)

  useEffect(() => {
    createMap({ apiKey, center, zoom }).then(setMap)
  }, [apiKey, center, zoom])

  return (
    <MapContext.Provider value={map}>
      <Box
        id={'map'}
        sx={{ position: 'initial!important' }}
      />
      {map && children}
    </MapContext.Provider>
  )
}
