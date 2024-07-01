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

import { type Event, listenUsersLocations } from './listen-users-locations'

describe('Listen Users Locations', () => {
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

  it.skip('should emit events when location created->deleted->updated', async () => {
    const user = await signUpTestUser()

    const events: Event[] = []
    const { promise, resolve } = Promise.withResolvers<void>()

    const unsubscribe = await listenUsersLocations({
      onChange: (event: Event): void => {
        events.push(event)

        if (events.length === 3) {
          resolve()
        }
      },
    })

    const createdUserLocation = await saveUserLocation({
      location: [111, 222],
      userId: user.id,
    })
    const deletedUserLocation = await deleteUserLocation({ userId: user.id })
    const updatedUserLocation = await saveUserLocation({
      location: [333, 444],
      userId: user.id,
    })

    console.log({
      createdUserLocation,
      deletedUserLocation,
      updatedUserLocation,
    })
    await promise

    deepEqual(events, [
      {
        payload: createdUserLocation,
        type: 'save',
      },
      {
        payload: deletedUserLocation,
        type: 'delete',
      },
      {
        payload: updatedUserLocation,
        type: 'save',
      },
    ])

    await unsubscribe()
  })
})
