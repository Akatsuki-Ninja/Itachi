import { createContext, useContext } from 'react'

import { type DefaultEmptyType } from '@/common'

import { MapInstance } from '../utils/google'

export const MapContext =
  createContext<DefaultEmptyType<MapInstance>>(undefined)

export const useMap = () => {
  const context = useContext(MapContext)

  if (!context) {
    throw new Error('useMap must be used within a MapProvider')
  }

  return context
}
