import { useMutation, useQueryClient } from '@tanstack/react-query'

import { type SignupCredentials, type TemporalSignupCredentials } from '@/core'
import { AUTH_QUERY_KEY, signup } from '@/web/auth'
import { useLogTanQuery } from '@/web/common'

export const useSignup = ({
  onSuccess,
}: {
  onSuccess?: (token: string) => void
} = {}) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: async (
      credentials: SignupCredentials | TemporalSignupCredentials
    ) => {
      const token = await signup(credentials)

      await queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEY] })

      return token
    },
    onSuccess,
  })

  useLogTanQuery(mutation)

  return mutation
}
