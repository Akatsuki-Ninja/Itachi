import { deepEqual, ok } from 'node:assert/strict'
import { after, before, describe, it } from 'node:test'

import type { Location } from '@/common'
import { close, connectTestDb, query, signup, type Signup } from '@/database'
import { MIGRATION_QUERY } from '@/database/scripts/migartion-query'
import { getSession, UserScope } from '@/store'

import { createUserLocation } from './create-user-location'

describe('Create User Location', () => {
  before(async () => {
    await connectTestDb({
      namespace: `test-${Math.random()}`,
    })
    await query(MIGRATION_QUERY)
  })

  after(async () => {
    await close()
  })

  it('should create and return location', async () => {
    // @todo: create helper
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
    deepEqual(restUserLocation, {
      ...restUserLocation,
      user,
    })
  })

  it('should create and return latest location', async () => {})
})
