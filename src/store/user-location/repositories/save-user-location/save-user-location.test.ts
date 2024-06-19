import { deepStrictEqual, ok } from 'node:assert/strict'
import { after, before, describe, it } from 'node:test'

import type { Location } from '@/common'
import { close, connect, signup, type Signup } from '@/database'
import { getSession, UserScope } from '@/store'

import { createUserLocation } from './create-user-location'

describe('Save User Location', () => {
  before(async () => {
    await connect()
  })

  after(async () => {
    await close()
  })

  it('should create location and return it', async () => {
    const credentials: Signup = {
      email: 'test-email',
      name: 'test-user',
      password: 'test-password',
      scope: UserScope.user,
    }
    await signup(credentials)
    const user = await getSession()

    const location: Location = {
      lat: 234324324,
      lng: 234234324,
    }

    const { id, ...restUserLocation } = await createUserLocation({
      location,
      userId: user.id,
    })

    ok(id)

    deepStrictEqual(restUserLocation, {
      ...restUserLocation,
      user,
    })
  })
})
