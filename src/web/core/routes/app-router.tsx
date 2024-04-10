import { createRootRoute, createRouter, Outlet } from '@tanstack/react-router'

import { App } from '../components/root/app.tsx'

import { indexRoute } from './index-route.ts'
import { roomRoute } from './room-route.ts'
import { worldmapRoute } from './worldmap-route.ts'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const rootRoute = createRootRoute({
  component: () => (
    <App>
      <Outlet />
    </App>
  ),
})

const routeTree = rootRoute.addChildren([indexRoute, roomRoute, worldmapRoute])

export const router = createRouter({ routeTree })
