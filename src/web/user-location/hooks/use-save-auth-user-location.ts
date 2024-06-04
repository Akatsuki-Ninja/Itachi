import { useMutation } from '@tanstack/react-query'
import { saveAuthUserLocation } from 'src/web/user-location'

import type { UserLocationEntity } from '@/core'

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
