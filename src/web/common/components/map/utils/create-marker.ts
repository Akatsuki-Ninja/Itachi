import { type ReactNode } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

import {
  type Coords,
  google,
  type MapInstance,
  type MarkerLibrary,
} from './google.ts'

export type MakerOptions = {
  content?: null | ReactNode | string | undefined
  coords: Coords
  map: MapInstance
  title?: null | ReactNode | string | undefined
}

export const createMarker = async ({
  content,
  coords,
  map,
  title,
}: MakerOptions) => {
  const { AdvancedMarkerElement } = (await google.maps.importLibrary(
    'marker'
  )) as MarkerLibrary

  const titleElement = window.document.createElement('div')
  const contentElement = window.document.createElement('div')

  contentElement.innerHTML = renderToStaticMarkup(content)
  titleElement.innerHTML = renderToStaticMarkup(title)

  const pinGlyph = new google.maps.marker.PinElement({
    glyph: titleElement,
    glyphColor: 'white',
  })

  const marker = new AdvancedMarkerElement({
    content: pinGlyph.element,
    map,
    position: coords,
  })

  marker.addListener('click', () => {
    const infoWindow = new google.maps.InfoWindow({
      content: '',
      disableAutoPan: true,
    })

    infoWindow.setContent(contentElement)
    infoWindow.open(map, marker)
  })
}
