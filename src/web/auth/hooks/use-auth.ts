import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

import { findAuth, getAuth } from '@/web/auth'

import { removeToken } from '../library/manage-token'

export const QUERY_KEY = 'auth'

export const useAuth = (
  { required }: { required: boolean } = { required: true }
) => {
  const query = useQuery({
    queryFn: required ? getAuth : findAuth,
    queryKey: [QUERY_KEY],
  })

  useEffect(() => {
    if (query.isError) {
      removeToken()
    }

    if (required && query.isFetched && !query.data) {
      removeToken()
    }
  }, [query.data, query.isError, query.isFetched, required])

  return query
}
