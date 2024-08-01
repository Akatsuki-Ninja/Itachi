import type { UserLikeEntity } from '@/store'

export enum InvitationStatusEnum {
  pending = 'pending',
  rejected = 'rejected',
  resolved = 'resolved',
}

export type InvitationEntity = {
  id: string
  lastChangedBy: UserLikeEntity
  receiver: UserLikeEntity
  sender: UserLikeEntity
  status: InvitationStatusEnum
}
