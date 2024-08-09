import type { RoomDto, UserLikeDto } from '@/core'

export enum InvitationStatusEnum {
  accepted = 'accepted',
  pending = 'pending',
  rejected = 'rejected',
}

export type InvitationEntity = {
  id: string
  lastChangedBy: UserLikeDto
  receiver: UserLikeDto
  room: RoomDto
  sender: UserLikeDto
  status: InvitationStatusEnum
}
