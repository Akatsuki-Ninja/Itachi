import { authenticate, query } from '@/database'

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

export type UserEntityLike = TemporalUserEntity | UserEntity

const QUERY = `
  SELECT * FROM user WHERE id = $auth;
`

export const findAuthUser = async (
  token: string
): Promise<null | UserEntityLike> => {
  await authenticate(token)

  const [[userEntity]] = await query<[[null | UserEntityLike]]>(QUERY)

  return userEntity
}
