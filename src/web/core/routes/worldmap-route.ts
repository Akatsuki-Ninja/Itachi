import { createRoute } from '@tanstack/react-router'

import { WorldmapScreen } from '@/web/worldmap'

import { rootRoute } from './app-router'

export const WORLDMAP_PATH = '/worldmap'

export const worldmapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: WORLDMAP_PATH,
  component: WorldmapScreen,
})
