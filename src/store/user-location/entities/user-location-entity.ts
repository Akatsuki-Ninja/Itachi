import type { LocationPoint, UserEntity } from '@/store'

export type UserLocationEntity = {
  createdAt: string
  deletedAt: null | string
  id: string
  location: LocationPoint
  updatedAt: string
  user: UserEntity
}
