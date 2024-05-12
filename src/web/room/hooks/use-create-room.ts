import { useMutation } from '@tanstack/react-query'

import { RoomEntity } from '@/database'

import { createRoom } from '../services/create-room'

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
