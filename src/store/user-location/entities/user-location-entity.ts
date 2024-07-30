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

export type RawLocation = [lng: number, lat: number]

export type UserLocationRawEntity = Omit<UserLocationEntity, 'location'> & {
  location: RawLocation
}
