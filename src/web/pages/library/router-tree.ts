import { homeRoute } from '../routes/home/home-route'
import { roomRoute } from '../routes/room/room-route'
import { worldMapRoute } from '../routes/world-map/world-map-route'

import { rootRoute } from './router'

export const routerTree = rootRoute.addChildren([
  homeRoute,
  roomRoute,
  worldMapRoute,
])
