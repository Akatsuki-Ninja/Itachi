import { faker } from '@faker-js/faker'

import { getSession, signup, type SingupValues, UserScope } from '@/store'

export const signUpTestUser = async ({
  credentials,
  scope,
}: {
  credentials?: Partial<SingupValues>
  scope?: UserScope
} = {}) => {
  await signup({
    credentials: {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password: faker.internet.password(),
      ...credentials,
    },
    scope: scope ?? UserScope.user,
  })

  return await getSession()
}
