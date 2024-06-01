import {
  findAuthUser,
  requireSession,
  type TemporalUserEntity,
  type UserEntity,
} from '@/database'

export const getAuthUser = async (): Promise<
  TemporalUserEntity | UserEntity
> => {
  await requireSession()

  const userEntity = await findAuthUser()

  if (!userEntity) {
    throw new Error('User is not authenticated')
  }

  return userEntity
}
