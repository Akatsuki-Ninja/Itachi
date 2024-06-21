import { deepEqual, ok } from 'node:assert/strict'
import { after, before, describe, it } from 'node:test'

import {
  close,
  connectTestDb,
  query,
  session,
  signup,
  type Signup,
} from '@/database'
import { MIGRATION_QUERY } from '@/database/scripts/migartion-query'
import { UserScope } from '@/store'

describe('Session', () => {
  before(async () => {
    await connectTestDb()
    await query(MIGRATION_QUERY)
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
    const userSession = await session<any>()

    ok(userSession)
    deepEqual(userSession, {
      email: credentials.email,
      id: userSession.id,
      name: credentials.name,
      password: userSession.password,
    })
  })
})
