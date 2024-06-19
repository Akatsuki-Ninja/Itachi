import { deepStrictEqual, ok } from 'node:assert/strict'
import { after, before, describe, it } from 'node:test'

import { close, connect, session, signup, type Signup } from '@/database'
// @todo: remove dependency from the store module
import {
  isRegularUser,
  isTemporalUser,
  type UserLikeEntity,
  UserScope,
} from '@/store'

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
    const credentials: Signup = {
      email: 'test-email',
      name: 'test-user',
      password: 'test-password',
      scope: UserScope.user,
    }
    await signup(credentials)
    const userSession = await session<UserLikeEntity>()

    ok(userSession)
    ok(isRegularUser(userSession), 'User should be in the regular scope.')

    deepStrictEqual(userSession, {
      email: credentials.email,
      id: userSession.id,
      name: credentials.name,
      password: userSession.password,
    })
  })

  it('should return temporal user session after temporal user signup', async () => {
    const credentials: Signup = {
      name: 'test-user',
      scope: UserScope.temporal,
    }
    await signup(credentials)

    const userSession = await session<UserLikeEntity>()

    ok(userSession)
    ok(isTemporalUser(userSession), 'User should be in the temporal scope.')

    deepStrictEqual(userSession, {
      id: userSession.id,
      name: credentials.name,
      temporal: true,
    })
  })
})
