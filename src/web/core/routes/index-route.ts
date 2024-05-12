import { createRoute } from '@tanstack/react-router'

import { WelcomeScreen } from '../screens/welcome-screen'

import { rootRoute } from './app-router'

export const INDEX_PATH = '/'

export const indexRoute = createRoute({
  component: WelcomeScreen,
  getParentRoute: () => rootRoute,
  path: INDEX_PATH,
})
