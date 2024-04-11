import { Surreal } from 'surrealdb.js'

const db = new Surreal()

export const connect = async () => {
  await db.connect('http://127.0.0.1:8000/rpc', {
    database: 'itachi',
    namespace: 'main',
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
    database: 'itachi',
    namespace: 'main',
    scope: isTemporal(credentials) ? 'temporal' : 'user',
    ...credentials,
  })

  function isTemporal(
    credentials: SignupDto | TemporalSignupDto
  ): credentials is TemporalSignupDto {
    return !(credentials as SignupDto).email
  }
}

export interface TemporalUserEntity {
  id: string
  name: string
  temporal: true
}

export interface UserEntity {
  email: string
  id: string
  name?: string
  password: string
}

export const authenticate = async (token: string) => {
  await ready()

  return db.authenticate(token)
}

export const findAuthUser = async () => {
  await ready()

  const [[user]] = await query<TemporalUserEntity | UserEntity>(`
    SELECT * FROM user WHERE id = $auth;
  `)

  return user
}
