import { ReactNode, useEffect } from 'react'

import { useMap } from './hooks/use-map.ts'
import { Coords } from './utils/create-map.ts'
import { createMarker } from './utils/create-marker.ts'

export type MarkerProps = {
  content?: ReactNode
  coords: Coords
  title?: ReactNode
}

export const Marker = ({ content, coords, title }: MarkerProps) => {
  const map = useMap()

  useEffect(() => {
    createMarker({ content, coords, map, title })
  }, [content, coords, map, title])

  return null
}
