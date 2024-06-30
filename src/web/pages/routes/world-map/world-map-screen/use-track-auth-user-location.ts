import { useRequiredAuth } from '@/web/auth'
import { useLocation } from '@/web/common'
import { useTrackUserLocation } from '@/web/user-location'

export const useTrackAuthUserLocation = () => {
  const { location } = useLocation()
  const { id } = useRequiredAuth()

  useTrackUserLocation({ location, userId: id })

  return { location }
}
