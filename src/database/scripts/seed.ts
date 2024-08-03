import { faker } from '@faker-js/faker'

import type { RegularUserDto } from '@/core'
import { close, query } from '@/database'
import { connectStore, saveUserLocation } from '@/store'

const userCreateQuery = `
CREATE user CONTENT {
  email: $email,
  name: $name,
  password: crypto::argon2::generate($password)
};
`

const seed = async () => {
  await connectStore()

  const users = (
    await Promise.all(
      new Array(50)
        .fill(null)
        .map(() => ({
          email: faker.internet.email(),
          name: faker.person.fullName(),
          password: faker.internet.password(),
        }))
        .map((userCredentials) =>
          query<RegularUserDto[]>(userCreateQuery, userCredentials)
        )
    )
  ).flatMap((users) => users.flatMap((user) => user))

  await Promise.all(
    users.map((user) =>
      saveUserLocation({
        location: {
          lat: faker.location.latitude(),
          lng: faker.location.longitude(),
        },
        userId: user.id,
      })
    )
  )

  await close()
}

seed()
