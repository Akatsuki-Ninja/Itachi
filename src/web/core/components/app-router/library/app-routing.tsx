import {
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router'

import { WelcomeScreen } from '@/web/common'
import { RoomScreen } from '@/web/room'

import { App } from '../../app'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const INDEX_PATH = '/'
export const ROOM_PATH = '/room'

export const rootRoute = createRootRoute({
  component: App,
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
