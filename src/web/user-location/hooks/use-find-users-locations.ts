import { useQuery } from '@tanstack/react-query'

import { findUsersLocations } from '@/core'
import { useLogTanQuery } from '@/web/common'

export const QUERY_KEY = 'find-users-locations'

export const useFindUsersLocations = ({
  refetchInterval,
}: { refetchInterval?: number } = {}) => {
  const query = useQuery({
    initialData: [],
    queryFn: findUsersLocations,
    queryKey: [QUERY_KEY],
    refetchInterval,
  })

  useLogTanQuery(query)

  return query
}
