import { useMutation } from '@tanstack/react-query'

import { InvitationDto, sendInvitation } from '@/core'
import { useLogTanQuery } from '@/web/common'

export const useSendInvitation = ({
  onSuccess,
}: {
  onSuccess?: (invitationDto: InvitationDto) => void
} = {}) => {
  /**
   * @todo: check active invitations
   * sender or receiver has active invitation then throw error
   */
  const mutation = useMutation({
    mutationFn: sendInvitation,
    onSuccess,
  })

  useLogTanQuery(mutation)

  return mutation
}
