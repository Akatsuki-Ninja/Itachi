import { createRootRoute, createRouter, Outlet } from '@tanstack/react-router'

import { homeRoute } from '@/web/pages/routes/home/home-route'
import { roomRoute } from '@/web/pages/routes/room/room-route'
import { worldMapRoute } from '@/web/pages/routes/world-map/world-map-route'

import { App } from '../../core/components/root/app'

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

const routerTree = rootRoute.addChildren([homeRoute, roomRoute, worldMapRoute])

export const router = createRouter({ routeTree: routerTree })
