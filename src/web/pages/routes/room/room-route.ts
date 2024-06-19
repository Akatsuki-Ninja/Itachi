import { createRoute } from '@tanstack/react-router'

import { rootRoute } from '../../library/router'

import { RoomPage } from './room-page'

export const ROOM_ID_PARAM = '$roomId'
export const ROOM_PATH = `/room/${ROOM_ID_PARAM}`

export const roomRoute = createRoute({
  component: RoomPage,
  getParentRoute: () => rootRoute,
  path: ROOM_PATH,
})
