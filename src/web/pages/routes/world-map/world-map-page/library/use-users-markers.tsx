import { useMemo } from 'react'

import type { Location } from '@/common'
import type { UserLocationDto } from '@/core'
import { getUserPreview, type UserPreview } from '@/web/user'
import { useFindUsersLocations } from '@/web/user-location'

type UserMarker = {
  color: string
  location: Location
  userPreview: UserPreview
}

export const useUsersMarkers = () => {
  const { data: liveLocations } = useFindUsersLocations()

  console.log(liveLocations)

  return {
    markers: useMemo(
      () =>
        liveLocations.map((location) =>
          createUserMarker({
            userLocation: location,
          })
        ),
      [liveLocations]
    ),
  }
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
  location: { lat, lng },
  userPreview: getUserPreview(user),
})
