import { createContext, useContext } from 'react'

import { Map } from '../utils/create-map.ts'

export const MapContext = createContext<Map | null | undefined>(undefined)

export const useMap = () => {
  const context = useContext(MapContext)

  if (!context) {
    throw new Error('useMap must be used within a MapProvider')
  }

  return context
}
