import { useMutation } from '@tanstack/react-query'

import type { UserPositionEntity } from '@/database'

import { setAuthUserPosition } from '../services/set-auth-user-position'

export const useSetAuthUserPosition = ({
  onSuccess,
}: {
  onSuccess?: (userPositionEntity: UserPositionEntity) => void
} = {}) => {
  return useMutation({
    mutationFn: setAuthUserPosition,
    onError: console.error,
    onSuccess,
  })
}
