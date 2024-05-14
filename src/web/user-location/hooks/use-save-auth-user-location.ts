import { useMutation } from '@tanstack/react-query'

import { saveUserLocation, type UserLocationEntity } from '@/core'
import { useLogTanQuery } from '@/web/common'

export const useSaveAuthUserLocation = ({
  onSuccess,
}: {
  onSuccess?: (userPositionEntity: UserLocationEntity) => void
} = {}) => {
  const mutation = useMutation({
    mutationFn: saveUserLocation,
    onSuccess,
  })

  useLogTanQuery(mutation)

  return mutation
}
