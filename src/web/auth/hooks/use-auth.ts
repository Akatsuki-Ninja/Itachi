import { useQuery } from '@tanstack/react-query'

import { findAuth } from '../services/find-auth.ts'

export const AUTH_QUERY_KEY = 'auth'

export const useAuth = () => {
  return useQuery({
    queryFn: findAuth,
    queryKey: [AUTH_QUERY_KEY],
  })
}
