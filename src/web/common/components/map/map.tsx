import { Box, type SystemStyleObject } from '@chakra-ui/react'
import { type ReactNode, useEffect, useState } from 'react'

import { MapContext } from './hooks/use-map'
import { createMap } from './utils/create-map'
import { type Coords, type MapInstance } from './utils/google.ts'

type MapProps = {
  apiKey: string
  center?: Coords | null | undefined
  children?: ReactNode
  zoom?: null | number | undefined
}

const mapSx: SystemStyleObject = {
  position: 'initial!important',
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
        sx={mapSx}
      />
      {map && children}
    </MapContext.Provider>
  )
}
