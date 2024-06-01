import { useMutation } from '@tanstack/react-query'

import type { UserLocationEntity } from '@/database'
import { saveAuthUserLocation } from '@/web/world-map'

export const useSaveAuthUserLocation = ({
  onSuccess,
}: {
  onSuccess?: (userPositionEntity: UserLocationEntity) => void
} = {}) => {
  return useMutation({
    mutationFn: saveAuthUserLocation,
    onError: console.error,
    onSuccess,
  })
}
