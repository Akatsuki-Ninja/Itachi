import { type ReactNode, useEffect } from 'react'

import { type Coords } from '@/web/common'

import { useMap } from './hooks/use-map'
import { createMarker, removeMarker } from './utils/create-marker'

export type MarkerProps = {
  color?: string
  content?: ReactNode
  coords: Coords
  title?: ReactNode
}

export const Marker = ({ color, content, coords, title }: MarkerProps) => {
  const map = useMap()

  useEffect(() => {
    const effect = () => {
      const promise = createMarker({ color, content, coords, map, title })

      return () => {
        promise.then((marker) => {
          removeMarker(marker)
        })
      }
    }

    const unsubscribe = effect()

    return () => {
      unsubscribe()
    }
  }, [color, content, coords, map, title])

  return null
}
