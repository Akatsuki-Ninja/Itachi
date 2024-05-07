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

export const findAuthUser = async () => {
  const [[user]] = await query<TemporalUserEntity | UserEntity>(`
    SELECT * FROM user WHERE id = $auth;
  `)

  return user
}
