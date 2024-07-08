import { type Location } from '@/common'
import type { UserLocationEntity } from '@/store'

export type UserLocationDto = Omit<UserLocationEntity, 'location'> & {
  location: Location
}
