import { useTrackUserLocation } from 'src/web/location'

import { useRequiredAuth } from '@/web/auth'
import { useLocation } from '@/web/common'

export const useTrackAuthUserLocation = () => {
  const { location } = useLocation()
  const { id: userId } = useRequiredAuth()

  useTrackUserLocation({ location, userId })

  return { location }
}
