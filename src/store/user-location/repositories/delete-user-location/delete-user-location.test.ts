import { deepEqual, equal, notDeepEqual, ok, rejects } from 'node:assert/strict'
import { after, afterEach, before, describe, it } from 'node:test'

import { close, invalidate, query } from '@/database'
import { MIGRATION_QUERY } from '@/database/scripts/migartion-query'
import { connectTestStore, saveUserLocation, signUpTestUser } from '@/store'

import { deleteUserLocation } from './delete-user-location'

describe('Delete User Location', () => {
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

  it('should update location with deleteAt field', async () => {
    const user = await signUpTestUser()

    const createdUserLocation = await saveUserLocation({
      location: [111, 222],
      userId: user.id,
    })
    const deletedUserLocation = await deleteUserLocation({ userId: user.id })

    ok(deletedUserLocation.deletedAt)
    equal(deletedUserLocation.deletedAt, deletedUserLocation.updatedAt)
    notDeepEqual(
      {
        deletedAt: deletedUserLocation.deletedAt,
        updatedAt: deletedUserLocation.updatedAt,
      },
      {
        deletedAt: createdUserLocation.deletedAt,
        updatedAt: createdUserLocation.updatedAt,
      }
    )
    deepEqual(
      {
        location: deletedUserLocation.location,
        user: deletedUserLocation.user,
      },
      {
        location: createdUserLocation.location,
        user: createdUserLocation.user,
      }
    )
  })

  it.skip('should throw error when location is not exist', async () => {
    const user = await signUpTestUser()
    const [id] = await query<string[]>('type::thing("userLocation", $userId)', {
      userId: user.id,
    })

    await rejects(deleteUserLocation({ userId: user.id }), {
      message: `Location with id ${id} doesn't exist.`,
      name: 'Error',
    })
  })
})
