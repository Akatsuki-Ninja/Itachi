import type { UserEntityLike, UserLocationEntity } from '@/core'
import type { Coords } from '@/web/common'
import { getUserPreview } from '@/web/user'

type UserMarker = {
  color?: string
  coords: Coords
  user: UserEntityLike
}

export const createUsersMarkers = ({
  currentUser,
  locations,
}: {
  currentUser: UserEntityLike
  locations: UserLocationEntity[]
}): UserMarker[] =>
  locations.map(({ id, location }) => {
    return {
      color: id === currentUser.id ? 'black' : 'blue',
      coords: location,
      user: getUserPreview({
        id,
        name: 'test',
        temporal: true,
      }),
    }
  })
