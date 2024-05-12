import { createRoute } from '@tanstack/react-router'

import { RoomScreen } from '../screens/room-screen'

import { rootRoute } from './app-router'

export const ROOM_ID_PARAM = '$roomId'
export const ROOM_PATH = `/room/${ROOM_ID_PARAM}`

export const roomRoute = createRoute({
  component: RoomScreen,
  getParentRoute: () => rootRoute,
  path: ROOM_PATH,
})
