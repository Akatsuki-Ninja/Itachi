import { createRoute } from '@tanstack/react-router'

import { RoomScreen } from '@/web/room'

import { rootRoute } from './app-router'

export const ROOM_PATH = '/room'

export const roomRoute = createRoute({
  component: RoomScreen,
  getParentRoute: () => rootRoute,
  path: ROOM_PATH,
})
