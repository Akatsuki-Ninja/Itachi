import type { UserLikeDto } from '@/core'

export type UserPreview = Omit<UserLikeDto, 'name'> & {
  name: string
}
