import { useMutation, useQueryClient } from '@tanstack/react-query'

import { SignupDto, TemporalSignupDto } from '@/database'
import { AUTH_QUERY_KEY } from '@/web/auth'

import { signup } from '../services/signup'

export const useSignup = ({
  onSuccess,
}: {
  onSuccess?: (token: string) => void
} = {}) => {
  const queryClient = useQueryClient()

  return useMutation({
    onSuccess,
    mutationFn: async (credentials: TemporalSignupDto | SignupDto) => {
      const token = await signup(credentials)

      await queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEY] })

      return token
    },
  })
}
