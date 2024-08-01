import { useMutation } from '@tanstack/react-query'

import { saveUserLocation, type UserLocationDto } from '@/core'
import { useLogTanQuery } from '@/web/common'

export const useSaveUserLocation = ({
  onSuccess,
}: {
  onSuccess?: (userPositionEntity: UserLocationDto) => void
} = {}) => {
  const mutation = useMutation({
    mutationFn: saveUserLocation,
    onSuccess,
  })

  useLogTanQuery(mutation)

  return mutation
}
