import { query } from '@/core'

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

export const findAuthUser = async (): Promise<null | UserEntityLike> => {
  const [[userEntity]] = await query<[[null | UserEntityLike]]>(QUERY)

  return userEntity
}
