import {
  getSession,
  type RegisterCredentials,
  signup,
  UserScope,
} from '@/store'

export const signUpTestUser = async ({
  credentials,
  scope,
}: {
  credentials?: Partial<RegisterCredentials>
  scope?: UserScope
} = {}) => {
  await signup({
    credentials: {
      email: 'test-email',
      name: 'test-user',
      password: 'test-password',
      ...credentials,
    },
    scope: scope ?? UserScope.user,
  })

  return await getSession()
}
