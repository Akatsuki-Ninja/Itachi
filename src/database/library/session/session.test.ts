import { deepStrictEqual, ok } from 'node:assert/strict'
import { after, before, describe, it } from 'node:test'

import { close, connect, session, signup, type Signup } from '@/database'

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
      scope: 'test',
    }
    await signup(credentials)
    const userSession = await session<any>()

    ok(userSession)

    deepStrictEqual(userSession, {
      email: credentials.email,
      id: userSession.id,
      name: credentials.name,
      password: userSession.password,
    })
  })
})
