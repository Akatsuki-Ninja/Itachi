import { Box, type SystemStyleObject } from '@chakra-ui/react'
import { type ReactNode, useEffect, useState } from 'react'

import { type DefaultEmptyType } from '@/common'

import { MapContext } from './hooks/use-map'
import { createMap } from './utils/create-map'
import { type Coords, type MapInstance } from './utils/google'

type MapProps = {
  apiKey: string
  center?: DefaultEmptyType<Coords>
  children?: ReactNode
  zoom?: DefaultEmptyType<number>
}

const mapSx: SystemStyleObject = {
  position: 'initial!important',
}

export const Map = ({ apiKey, center, children, zoom }: MapProps) => {
  const [map, setMap] = useState<DefaultEmptyType<MapInstance>>(undefined)

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
