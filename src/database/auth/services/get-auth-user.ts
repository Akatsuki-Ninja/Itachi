import {
  findAuthUser,
  requireAuthentication,
  type TemporalUserEntity,
  type UserEntity,
} from '@/database'

export const getAuthUser = async (): Promise<
  TemporalUserEntity | UserEntity
> => {
  await requireAuthentication()

  const userEntity = await findAuthUser()

  if (!userEntity) {
    throw new Error('User is not authenticated')
  }

  return userEntity
}
