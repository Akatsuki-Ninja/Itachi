import { createRoute } from '@tanstack/react-router'

import { rootRoute } from '../../library/router'

import { WorldMapScreen } from './world-map-screen'

export const WORLD_MAP_PATH = '/world-map'

export const worldMapRoute = createRoute({
  component: WorldMapScreen,
  getParentRoute: () => rootRoute,
  path: WORLD_MAP_PATH,
})
