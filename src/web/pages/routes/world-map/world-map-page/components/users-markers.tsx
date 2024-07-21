import { useCallback, useMemo } from 'react'

import type { UserLikeDto } from '@/core'
import { useRequiredAuth } from '@/web/auth'
import type { UserPreview } from '@/web/user'
import {
  createUserMarker,
  useFindUsersLocations,
  UserMarker,
} from '@/web/user-location'

export const UsersMarkers = () => {
  const authUser = useRequiredAuth()
  const getUserMarkColor = useCallback(
    ({
      defaultColor,
      userPreview,
    }: {
      defaultColor: string
      userPreview: UserPreview
    }) => {
      return getMarkerColor({
        currentUser: authUser,
        defaultColor,
        userPreview,
      })
    },
    [authUser]
  )

  const { markers } = useUsersMarkers()

  return (
    <>
      {markers.map(({ color, coords, userPreview }) => (
        <UserMarker
          color={getUserMarkColor({
            defaultColor: color,
            userPreview: userPreview,
          })}
          coords={coords}
          key={userPreview.id}
          userPreview={userPreview}
        />
      ))}
    </>
  )
}

const useUsersMarkers = () => {
  const { data: liveLocations } = useFindUsersLocations()

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

const CURRENT_USER_COLOR = 'black'

const getMarkerColor = ({
  currentUser,
  defaultColor,
  userPreview,
}: {
  currentUser: UserLikeDto
  defaultColor: string
  userPreview: UserPreview
}) => {
  return userPreview.id === currentUser.id ? CURRENT_USER_COLOR : defaultColor
}
