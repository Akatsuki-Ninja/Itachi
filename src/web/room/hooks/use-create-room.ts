import { useMutation } from '@tanstack/react-query'

import { type RoomEntity } from '@/database'
import { createRoom } from '@/web/room'

export const useCreateRoom = ({
  onSuccess,
}: {
  onSuccess?: (room: RoomEntity) => void
} = {}) => {
  return useMutation({
    mutationFn: createRoom,
    onSuccess,
  })
}
