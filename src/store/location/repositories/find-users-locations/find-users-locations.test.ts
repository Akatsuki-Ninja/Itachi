import { deepEqual } from 'node:assert/strict'
import { after, afterEach, before, describe, it } from 'node:test'

import { close, invalidate, query } from '@/database'
import { MIGRATION_QUERY } from '@/database/scripts/migartion-query'
import {
  connectTestStore,
  deleteUserLocation,
  saveUserLocation,
  signUpTestUser,
} from '@/store'

import { findUsersLocations } from './find-users-locations'

describe('Find Users Locations', () => {
  before(async () => {
    await connectTestStore()
    await query(MIGRATION_QUERY)
  })

  afterEach(async () => {
    await invalidate()
    await query(MIGRATION_QUERY)
  })

  after(async () => {
    await close()
  })

  it('should return not deleted users locations', async () => {
    {
      const user = await signUpTestUser()
      await saveUserLocation({
        location: { lat: 111, lng: 222 },
        userId: user.id,
      })
      await deleteUserLocation({ userId: user.id })
    }

    const user = await signUpTestUser()
    const createdUserLocation = await saveUserLocation({
      location: { lat: 111, lng: 222 },
      userId: user.id,
    })

    deepEqual(await findUsersLocations(), [createdUserLocation])
  })
})
