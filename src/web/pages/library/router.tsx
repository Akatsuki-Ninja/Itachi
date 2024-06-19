import { createRootRoute, createRouter, Outlet } from '@tanstack/react-router'

import { App } from '../../core/components/root/app'

import { routerTree } from './router-tree'

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

export const router = createRouter({ routeTree: routerTree })
