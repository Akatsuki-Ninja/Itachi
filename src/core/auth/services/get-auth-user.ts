import {
  findAuthUser,
  requireAuthentication,
  type UserEntityLike,
} from '@/core'

export const getAuthUser = async (): Promise<UserEntityLike> => {
  await requireAuthentication()

  const userEntity = await findAuthUser()

  if (!userEntity) {
    throw new Error('User is not authenticated')
  }

  return userEntity
}
