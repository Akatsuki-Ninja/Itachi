import { useMutation } from '@tanstack/react-query'

import { createRoom, type RoomDto } from '@/core'
import { useLogTanQuery } from '@/web/common'

export const useCreateRoom = ({
  onSuccess,
}: {
  onSuccess?: (room: RoomDto) => void
} = {}) => {
  const mutation = useMutation({
    mutationFn: createRoom,
    onSuccess,
  })

  useLogTanQuery(mutation)

  return mutation
}
