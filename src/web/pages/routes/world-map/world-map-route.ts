import { createRoute } from '@tanstack/react-router'

import { rootRoute } from '../../library/router'

import { WorldMapPage } from './world-map-page'

export const WORLD_MAP_PATH = '/world-map'

export const worldMapRoute = createRoute({
  component: WorldMapPage,
  getParentRoute: () => rootRoute,
  path: WORLD_MAP_PATH,
})
