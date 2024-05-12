import { Loader } from '@googlemaps/js-api-loader'

import { type DefaultEmptyType } from '@/common'

import { type Coords, type MapInstance } from './google'

export type MapOptions = {
  apiKey: string
  center?: DefaultEmptyType<Coords>
  zoom?: DefaultEmptyType<number>
}

const DEFAULT_CENTER = { lat: -34.397, lng: 150.644 }
const DEFAULT_ZOOM = 14

export const createMap = async ({
  apiKey,
  center,
  zoom,
}: MapOptions): Promise<MapInstance> => {
  const { Map } = await new Loader({
    apiKey,
  }).importLibrary('maps')

  return new Map(document.getElementById('map') as HTMLElement, {
    center: center ?? DEFAULT_CENTER,
    mapId: 'world-map',
    zoom: zoom ?? DEFAULT_ZOOM,
  })
}
