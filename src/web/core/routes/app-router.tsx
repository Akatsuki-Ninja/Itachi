import { createRootRoute, createRouter, Outlet } from '@tanstack/react-router'

import { App } from '../components/root/app.tsx'

import { indexRoute } from './index-route'
import { roomRoute } from './room-route'
import { worldMapRoute } from './world-map-route.ts'

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

const routeTree = rootRoute.addChildren([indexRoute, roomRoute, worldMapRoute])

export const router = createRouter({ routeTree })
