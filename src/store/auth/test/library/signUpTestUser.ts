import { faker } from '@faker-js/faker'

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
      email: faker.internet.email(),
      name: faker.person.fullName(),
      password: faker.internet.password(),
      ...credentials,
    },
    scope: scope ?? UserScope.user,
  })

  return await getSession()
}
