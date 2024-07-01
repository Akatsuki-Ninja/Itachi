import { deepEqual, equal, notDeepEqual, ok } from 'node:assert/strict'
import { after, afterEach, before, describe, it } from 'node:test'

import type { Location } from '@/common'
import { close, invalidate, query } from '@/database'
import { MIGRATION_QUERY } from '@/database/scripts/migartion-query'
import { connectTestStore, deleteUserLocation, signUpTestUser } from '@/store'

import { saveUserLocation } from './save-user-location'

describe('Save User Location', () => {
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

  it('should create and return location', async () => {
    const user = await signUpTestUser()

    const locationToCreate: Location = {
      lat: 111,
      lng: 222,
    }
    const { createdAt, deletedAt, id, updatedAt, ...restUserLocation } =
      await saveUserLocation({
        location: [locationToCreate.lng, locationToCreate.lat],
        userId: user.id,
      })

    ok(id)
    ok(createdAt)
    ok(updatedAt)
    equal(deletedAt, null)
    deepEqual(restUserLocation, {
      location: [locationToCreate.lng, locationToCreate.lat],
      user,
    })
  })

  it('should update and return location', async () => {
    const user = await signUpTestUser()

    const createdUserLocation = await saveUserLocation({
      location: [111, 222],
      userId: user.id,
    })

    const locationToUpdate: Location = {
      lat: 55555,
      lng: 55555,
    }
    const updatedUserLocation = await saveUserLocation({
      location: [locationToUpdate.lng, locationToUpdate.lat],
      userId: user.id,
    })

    notDeepEqual(
      {
        location: updatedUserLocation.location,
        updatedAt: updatedUserLocation.updatedAt,
      },
      {
        location: createdUserLocation.location,
        updatedAt: createdUserLocation.updatedAt,
      }
    )
    deepEqual(
      {
        createdAt: updatedUserLocation.createdAt,
        deletedAt: updatedUserLocation.deletedAt,
        id: updatedUserLocation.id,
        location: updatedUserLocation.location,
        user: updatedUserLocation.user,
      },
      {
        createdAt: createdUserLocation.createdAt,
        deletedAt: createdUserLocation.deletedAt,
        id: createdUserLocation.id,
        location: [locationToUpdate.lng, locationToUpdate.lat],
        user: createdUserLocation.user,
      }
    )

    deepEqual(await query('SELECT *, user.* FROM userLocation;'), [
      [updatedUserLocation],
    ])
  })

  it('should update deleted location and clear deleteAt field', async () => {
    const user = await signUpTestUser()

    await saveUserLocation({
      location: [111, 222],
      userId: user.id,
    })

    const deletedLocation = await deleteUserLocation({ userId: user.id })

    const updatedUserLocation = await saveUserLocation({
      location: [333, 444],
      userId: user.id,
    })

    equal(updatedUserLocation.deletedAt, null)
    notDeepEqual(
      {
        location: updatedUserLocation.location,
        updatedAt: updatedUserLocation.updatedAt,
      },
      {
        location: deletedLocation.location,
        updatedAt: deletedLocation.updatedAt,
      }
    )
  })
})
