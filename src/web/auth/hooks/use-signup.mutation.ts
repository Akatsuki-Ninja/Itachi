import { useMutation } from '@tanstack/react-query'
import { signup, SignupDto, TemporalSignupDto } from '@/database'
import { AUTH_USER_QUERY_KEY, saveToken } from '@/web/auth'
import { queryClient } from '@/web/core/components/app-provider/library.ts'

export const useSignupMutation = ({
  onSuccess,
}: {
  onSuccess?: (token: string) => void
} = {}) => {
  return useMutation({
    onSuccess,
    mutationFn: async (credentials: TemporalSignupDto | SignupDto) => {
      const token = await signup(credentials)

      saveToken(token)

      await queryClient.invalidateQueries({ queryKey: [AUTH_USER_QUERY_KEY] })

      return token
    },
  })
}
