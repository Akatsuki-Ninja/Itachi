import { useQuery } from '@tanstack/react-query'
import { getToken } from '@/web/auth'
import { authenticate, getAuthUser } from '@/database'

export const AUTH_USER_QUERY_KEY = 'authUser'

export const useAuthQuery = () => {
  return useQuery({
    queryKey: [AUTH_USER_QUERY_KEY],
    queryFn: fetchUser,
  })
}

const fetchUser = async () => {
  const token = getToken()

  if (token) {
    await authenticate(token)

    return getAuthUser()
  }

  return null
}
