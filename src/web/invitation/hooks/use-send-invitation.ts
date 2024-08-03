import { useMutation } from '@tanstack/react-query'

import { InviteDto, sendInvite } from '@/core'
import { useLogTanQuery } from '@/web/common'

export const useSendInvitation = ({
  onSuccess,
}: {
  onSuccess?: (invitationDto: InviteDto) => void
} = {}) => {
  const mutation = useMutation({
    mutationFn: sendInvite,
    onSuccess,
  })

  useLogTanQuery(mutation)

  return mutation
}
