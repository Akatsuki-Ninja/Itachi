import type { UserEntity } from '@/store'

export type RegularUserDto = Omit<UserEntity, 'password'>
