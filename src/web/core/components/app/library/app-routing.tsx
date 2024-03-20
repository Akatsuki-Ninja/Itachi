import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from '@tanstack/react-router'

import { WelcomeScreen } from '@/web/common'
import { RoomScreen } from '@/web/room'

import { Root } from '../root.tsx'

import { INDEX_PATH, ROOM_PATH } from './app-routing-paths.ts'

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

const routeTree = rootRoute.addChildren([indexRoute, roomRoute])

export const router = createRouter({ routeTree })
