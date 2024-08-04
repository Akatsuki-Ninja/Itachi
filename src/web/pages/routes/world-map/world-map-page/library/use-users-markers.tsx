import { useMemo } from 'react'
import { useFindUsersLocations } from 'src/web/location'

import type { Location } from '@/common'
import type { UserLocationDto } from '@/core'
import { getUserPreview, type UserPreview } from '@/web/user'

type UserMarker = {
  color: string
  location: Location
  userPreview: UserPreview
}

export const useUsersMarkers = () => {
  const { data: liveLocations } = useFindUsersLocations({
    refetchInterval: 3000,
  })

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
