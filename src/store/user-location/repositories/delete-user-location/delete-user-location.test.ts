import { deepEqual, ok } from 'node:assert/strict'
import { after, before, describe, it } from 'node:test'

import type { Location } from '@/common'
import { close, connectTestDb, query, signup, type Signup } from '@/database'
import { MIGRATION_QUERY } from '@/database/scripts/migartion-query'
import { createUserLocation, getSession, UserScope } from '@/store'

import { deleteUserLocation } from './delete-user-location'

describe('Delete User Location', () => {
  before(async () => {
    await connectTestDb({
      namespace: `test-${Math.random()}`,
    })

    await query(MIGRATION_QUERY)
  })

  after(async () => {
    await close()
  })

  it('should delete locations', async () => {
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
    await createUserLocation({
      location,
      userId: user.id,
    })

    deepEqual(await deleteUserLocation({ userId: user.id }), [])

    deepEqual(await selectUserLocation(), [[]])
    deepEqual(await selectUserToLocation(), [[]])
  })

  it('should not delete other users locations', async () => {
    let freeUserId
    let userIdToDeleteLocation

    {
      const credentials: Signup = {
        email: 'test-email',
        name: 'test-user',
        password: 'test-password',
        scope: UserScope.user,
      }
      await signup(credentials)
      const user = await getSession()
      freeUserId = user.id

      const location: Location = {
        lat: 234324324,
        lng: 234234324,
      }
      await createUserLocation({
        location,
        userId: user.id,
      })
    }

    {
      const credentials: Signup = {
        email: 'test-email-2',
        name: 'test-user-2',
        password: 'test-password',
        scope: UserScope.user,
      }
      await signup(credentials)
      const user = await getSession()
      userIdToDeleteLocation = user.id

      const location: Location = {
        lat: 234324324,
        lng: 234234324,
      }
      await createUserLocation({
        location,
        userId: user.id,
      })
    }

    await deleteUserLocation({ userId: userIdToDeleteLocation })

    const [[{ in: asIn }]] = (await selectUserToLocation()) as any
    const [[{ id }]] = (await selectUserLocation()) as any

    deepEqual({ in: asIn }, { in: freeUserId })
    ok(id)
  })
})

const selectUserLocation = async () =>
  await query('SELECT * FROM userLocation;')

const selectUserToLocation = async () =>
  await query('SELECT * FROM userToLocation;')
