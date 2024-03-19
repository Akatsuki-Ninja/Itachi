import { Surreal } from 'surrealdb.js'

const db = new Surreal()

export const connect = async () => {
  await db.connect('http://127.0.0.1:8000/rpc', {
    namespace: 'main',
    database: 'itachi',
  })
}

const ready = async () => {
  try {
    await db.wait()
  } catch (error) {
    await connect()
  }
}

export const query = async <T>(
  queryString: string,
  vars?: any
): Promise<[[T]]> => {
  await ready()

  return db.query<any>(queryString, vars)
}

export interface TemporalSignupDto {
  name?: string
}

export interface SignupDto {
  email: string
  name?: string
  password: string
}

export const signup = async (credentials: SignupDto | TemporalSignupDto) => {
  await ready()

  return await db.signup({
    namespace: 'main',
    database: 'itachi',
    scope: isTemporal(credentials) ? 'temporal' : 'user',
    ...credentials,
  })

  function isTemporal(
    credentials: SignupDto | TemporalSignupDto
  ): credentials is TemporalSignupDto {
    return !(credentials as SignupDto).email
  }
}

interface TemporalUserEntity {
  id: string
  name: string
  temporal: true
}

interface UserEntity {
  id: string
  email: string
  name?: string
  password: string
}

export const authenticate = async (token: string) => {
  await ready()

  return db.authenticate(token)
}

export const getAuthUser = async () => {
  await ready()

  const [[user]] = await query<UserEntity | TemporalUserEntity>(`
    SELECT * FROM user WHERE id = $auth;
  `)

  return user
}
