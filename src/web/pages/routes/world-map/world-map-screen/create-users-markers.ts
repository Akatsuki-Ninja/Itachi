import type { UserLikeDto, UserLocationDto } from '@/core'
import type { Coords } from '@/web/common'
import { getUserPreview, type UserPreview } from '@/web/user'

type UserMarker = {
  color?: string
  coords: Coords
  user: UserPreview
}

export const createUsersMarkers = ({
  currentUser,
  locations,
}: {
  currentUser: UserLikeDto
  locations: UserLocationDto[]
}): UserMarker[] =>
  locations.map(({ id, location: { lat, lng }, user }) => {
    return {
      color: id === currentUser.id ? 'black' : 'blue',
      coords: { lat, lng },
      user: getUserPreview(user),
    }
  })
