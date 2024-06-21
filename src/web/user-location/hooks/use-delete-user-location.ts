import { useMutation } from '@tanstack/react-query'

import { deleteUserLocation } from '@/core'
import { useLogTanQuery } from '@/web/common'

export const useDeleteUserLocation = ({
  onSuccess,
}: {
  onSuccess?: () => void
} = {}) => {
  const mutation = useMutation({
    mutationFn: deleteUserLocation,
    onSuccess,
  })

  useLogTanQuery(mutation)

  return mutation
}
