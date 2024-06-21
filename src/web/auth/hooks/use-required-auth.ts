import { useAuth } from '@/web/auth'

export const useRequiredAuth = () => {
  const { data, isFetched } = useAuth()

  if (data) {
    return data
  }

  if (!isFetched) {
    throw new Error('User should be already authenticated/fetched.')
  }

  throw new Error('User is not authenticated.')
}
