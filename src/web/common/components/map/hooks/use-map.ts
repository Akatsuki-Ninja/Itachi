import { createContext, useContext } from 'react'

import { type MapInstance } from '../utils/google.ts'

export const MapContext = createContext<MapInstance | null | undefined>(
  undefined
)

export const useMap = () => {
  const context = useContext(MapContext)

  if (!context) {
    throw new Error('useMap must be used within a MapProvider')
  }

  return context
}
