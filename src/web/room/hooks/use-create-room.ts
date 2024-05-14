import { useMutation } from '@tanstack/react-query'

import { createRoom, type RoomEntity } from '@/core'
import { useLogTanQuery } from '@/web/common'

export const useCreateRoom = ({
  onSuccess,
}: {
  onSuccess?: (room: RoomEntity) => void
} = {}) => {
  const mutation = useMutation({
    mutationFn: createRoom,
    onSuccess,
  })

  useLogTanQuery(mutation)

  return mutation
}
