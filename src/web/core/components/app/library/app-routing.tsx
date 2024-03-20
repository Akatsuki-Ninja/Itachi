import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router'

import { WelcomeScreen } from '@/web/common'
import { RoomScreen } from '@/web/room'
import { WorldmapScreen } from '@/web/worldmap'

import { Root } from '../root.tsx'

import { INDEX_PATH, ROOM_PATH, WORLDMAP_PATH } from './app-routing-paths.ts'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const rootRoute = createRootRoute({
  component: () => (
    <Root>
      <Outlet />
    </Root>
  ),
})

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: INDEX_PATH,
  component: WelcomeScreen,
})

export const roomRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROOM_PATH,
  component: RoomScreen,
})

export const worldmapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: WORLDMAP_PATH,
  component: WorldmapScreen,
})

const routeTree = rootRoute.addChildren([indexRoute, roomRoute, worldmapRoute])

export const router = createRouter({ routeTree })
