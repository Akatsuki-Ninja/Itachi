import { query } from '@/database'

export type TemporalUserEntity = {
  id: string
  name: string
  temporal: true
}

export type UserEntity = {
  email: string
  id: string
  name?: string
  password: string
}

const QUERY = `
  SELECT * FROM user WHERE id = $auth;
`

export const findAuthUser = async (): Promise<
  null | TemporalUserEntity | UserEntity
> => {
  const [[userEntity]] =
    await query<[[null | TemporalUserEntity | UserEntity]]>(QUERY)

  return userEntity
}
