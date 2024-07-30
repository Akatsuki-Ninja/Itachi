import { useRequiredAuth } from '@/web/auth'

import { useUsersMarkers } from '../library/use-users-markers'

import { UserMarker } from './user-marker'

const CURRENT_USER_COLOR = '#eee'

export const UsersMarkers = () => {
  const { markers } = useUsersMarkers()
  const authUser = useRequiredAuth()

  return (
    <>
      {markers.map(({ color, location, userPreview }) => (
        <UserMarker
          color={authUser.id === userPreview.id ? CURRENT_USER_COLOR : color}
          key={userPreview.id}
          location={location}
          userPreview={userPreview}
        />
      ))}
    </>
  )
}
