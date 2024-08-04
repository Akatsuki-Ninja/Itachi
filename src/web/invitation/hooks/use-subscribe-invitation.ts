import { useQuery } from '@tanstack/react-query'

import { findInvitation } from '@/core'
import { useLogTanQuery } from '@/web/common'

export const QUERY_KEY = 'find-invitation'

/**
 * show invitation that was in last 10 sec from now by updateAt
 * accepted -> show accepted info (3s) -> redirect to a room
 * rejected -> show rejected info (3s) -> hide
 */

export const useSubscribeInvitation = ({
  receiverId,
  refetchInterval,
  senderId,
}: {
  receiverId?: string
  refetchInterval?: number
  senderId?: string
} = {}) => {
  const query = useQuery({
    initialData: [],
    queryFn: () => findInvitation({ receiverId, senderId }),
    queryKey: [`${QUERY_KEY}_${receiverId}_${senderId}`],
    refetchInterval,
  })

  useLogTanQuery(query)

  return query
}
