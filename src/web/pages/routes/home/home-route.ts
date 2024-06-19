import { createRoute } from '@tanstack/react-router'

import { rootRoute } from '../../library/router'

import { WelcomePage } from './welcome-page'

export const INDEX_PATH = '/'

export const homeRoute = createRoute({
  component: WelcomePage,
  getParentRoute: () => rootRoute,
  path: INDEX_PATH,
})
