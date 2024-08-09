import { useQuery } from '@tanstack/react-query'

import { findActiveInvitation } from '@/core'
import { useLogTanQuery } from '@/web/common'

export const QUERY_KEY = 'find-active-invitation'

export const useSubscribeActiveInvitation = ({
  receiverId,
  refetchInterval,
  senderId,
}: {
  receiverId?: string
  refetchInterval?: number
  senderId?: string
} = {}) => {
  const query = useQuery({
    queryFn: () => findActiveInvitation({ receiverId, senderId }),
    queryKey: [`${QUERY_KEY}_${receiverId}_${senderId}`],
    refetchInterval,
  })

  useLogTanQuery(query)

  return query
}
