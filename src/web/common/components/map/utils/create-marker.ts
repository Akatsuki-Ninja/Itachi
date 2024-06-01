import { type ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import { type DefaultEmptyType } from '@/common'

import { type Coords, type MapInstance, type MarkerLibrary } from './google'

export type MakerOptions = {
  content?: DefaultEmptyType<ReactNode>
  coords: Coords
  map: MapInstance
  title?: DefaultEmptyType<ReactNode>
}

export const createMarker = async ({
  content,
  coords,
  map,
  title,
}: MakerOptions) => {
  const { AdvancedMarkerElement } = (await window.google.maps.importLibrary(
    'marker'
  )) as MarkerLibrary

  const titleElement = window.document.createElement('div')
  const contentElement = window.document.createElement('div')

  contentElement.innerHTML = renderToStaticMarkup(content)
  titleElement.innerHTML = renderToStaticMarkup(title)

  const pinGlyph = new window.google.maps.marker.PinElement({
    glyph: titleElement,
    glyphColor: 'white',
  })

  const marker = new AdvancedMarkerElement({
    content: pinGlyph.element,
    map,
    position: coords,
  })

  marker.addListener('click', () => {
    const infoWindow = new window.google.maps.InfoWindow({
      content: '',
      disableAutoPan: true,
    })

    infoWindow.setContent(contentElement)
    infoWindow.open(map, marker)
  })
}
