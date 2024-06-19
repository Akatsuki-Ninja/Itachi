import { useMutation } from '@tanstack/react-query'

import { createUserLocation, type UserLocationDto } from '@/core'
import { useLogTanQuery } from '@/web/common'

export const useSaveAuthUserLocation = ({
  onSuccess,
}: {
  onSuccess?: (userPositionEntity: UserLocationDto) => void
} = {}) => {
  const mutation = useMutation({
    mutationFn: createUserLocation,
    onSuccess,
  })

  useLogTanQuery(mutation)

  return mutation
}
