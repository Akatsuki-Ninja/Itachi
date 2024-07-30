import type { Location } from '@/common'

import type { RawLocation } from '../entities/user-location-entity'

export const serializeLocation = (location: Location): RawLocation => [
  location.lng,
  location.lat,
]

export const deserializeLocation = (rawLocation: RawLocation): Location => ({
  lat: rawLocation[1],
  lng: rawLocation[0],
})
