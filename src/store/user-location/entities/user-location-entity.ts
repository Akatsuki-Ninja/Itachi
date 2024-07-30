import type { Location } from '@/common'
import type { UserEntity } from '@/store'

export type UserLocationEntity = {
  createdAt: string
  deletedAt: null | string
  id: string
  location: Location
  updatedAt: string
  user: UserEntity
}
