import type { UserLocationDto } from '@/core'
import type { Coords } from '@/web/common'
import { getUserPreview, type UserPreview } from '@/web/user'

type UserMarker = {
  color: string
  coords: Coords
  userPreview: UserPreview
}

const DEFAULT_COLOR = 'blue'

export const createUserMarker = ({
  color,
  userLocation: {
    location: { lat, lng },
    user,
  },
}: {
  color?: string
  userLocation: UserLocationDto
}): UserMarker => ({
  color: color ?? DEFAULT_COLOR,
  coords: { lat, lng },
  userPreview: getUserPreview(user),
})
