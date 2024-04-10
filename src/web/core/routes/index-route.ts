import { createRoute } from '@tanstack/react-router'

import { WelcomeScreen } from '@/web/common'

import { rootRoute } from './app-router'

export const INDEX_PATH = '/'

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: INDEX_PATH,
  component: WelcomeScreen,
})
