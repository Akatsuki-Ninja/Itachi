import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { findAuth } from '@/web/auth'
import { useLogTanQuery } from '@/web/common'

import { removeToken } from '../library/manage-token'

export const QUERY_KEY = 'auth'

export const useAuth = () => {
  const query = useQuery({
    queryFn: findAuth,
    queryKey: [QUERY_KEY],
  })

  useLogTanQuery(query)

  useEffect(() => {
    if (query.isError) {
      removeToken()
    }
  }, [query.error, query.isError])

  return query
}
