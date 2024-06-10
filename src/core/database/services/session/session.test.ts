import { deepStrictEqual, ok } from 'node:assert/strict'

import { after, before, describe, it } from 'node:test'

import {
  close,
  connect,
  isRegularUser,
  isTemporalUser,
  session,
  signup,
  type SignupCredentials,
  type TemporalSignupCredentials,
} from '@/core'

describe('Session', () => {
  before(async () => {
    await connect()
  })

  after(async () => {
    await close()
  })

  it('should not return session when user is not authenticated', async () => {
    ok(!(await session()))
  })

  it('should return regular user in the session after regular user signup', async () => {
    const credentials: SignupCredentials = {
      email: 'test-email',
      name: 'test-user',
      password: 'test-password',
    }
    await signup(credentials)

    const userSession = await session()

    ok(userSession)
    ok(isRegularUser(userSession), 'User should be regular.')

    deepStrictEqual(userSession, {
      ...credentials,
      id: userSession.id,
      password: userSession.password,
    })
  })

  it('should return temporal user session after temporal user signup', async () => {
    const credentials: TemporalSignupCredentials = {
      name: 'test-user',
    }
    await signup(credentials)

    const userSession = await session()

    ok(userSession)
    ok(isTemporalUser(userSession), 'User should be temporal.')

    deepStrictEqual(userSession, {
      ...credentials,
      id: userSession.id,
      temporal: true,
    })
  })
})
