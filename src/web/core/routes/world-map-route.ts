import { createRoute } from '@tanstack/react-router'

import { WorldMapScreen } from '../screens/world-map-screen'

import { rootRoute } from './app-router'

export const WORLD_MAP_PATH = '/world-map'

export const worldMapRoute = createRoute({
  component: WorldMapScreen,
  getParentRoute: () => rootRoute,
  path: WORLD_MAP_PATH,
})
