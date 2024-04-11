import { createRoute } from '@tanstack/react-router'

import { WorldMapScreen } from '@/web/worldmap'

import { rootRoute } from './app-router'

export const WORLDMAP_PATH = '/worldmap'

export const worldmapRoute = createRoute({
  component: WorldMapScreen,
  getParentRoute: () => rootRoute,
  path: WORLDMAP_PATH,
})
