import { useAuth } from '@/web/auth'

export const useRequiredAuth = () => {
  const { data, isFetched } = useAuth()

  if (!isFetched) {
    throw new Error('Authenticated user should be already fetched')
  }

  if (!data) {
    throw new Error('Authentication is required')
  }

  return data
}
