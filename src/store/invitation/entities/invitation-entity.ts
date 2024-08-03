import type { RoomDto, UserLikeDto } from '@/core'

export enum InvitationStatusEnum {
  pending = 'pending',
  rejected = 'rejected',
  resolved = 'resolved',
}

export type InvitationEntity = {
  id: string
  lastChangedBy: UserLikeDto
  receiver: UserLikeDto
  room: RoomDto
  sender: UserLikeDto
  status: InvitationStatusEnum
}
