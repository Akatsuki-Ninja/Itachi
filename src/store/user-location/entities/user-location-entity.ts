import type { LocationEntity, UserEntity } from '@/store'

export type UserLocationEntity = LocationEntity & {
  user: UserEntity
}
