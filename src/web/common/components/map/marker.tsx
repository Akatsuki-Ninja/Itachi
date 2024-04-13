import { type ReactNode, useEffect } from 'react'

import { useMap } from './hooks/use-map'
import { createMarker } from './utils/create-marker'
import { type Coords } from './utils/google'

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
