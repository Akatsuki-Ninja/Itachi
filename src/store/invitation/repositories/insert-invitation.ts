import { query } from '@/database'

import {
  type InvitationEntity,
  InvitationStatusEnum,
} from '../entities/invitation-entity'

const QUERY = `
BEGIN;

LET $invitation = INSERT INTO invitation {
  id: $id,
  receiver: <record>$receiverId,
  sender: <record>$senderId,
  status: $status,
  createdAt: $currentDate,
  updatedAt: $currentDate,
} ON DUPLICATE KEY UPDATE 
    receiver = $input.$receiverId, 
    sender = $input.$senderId, 
    status = $input.status, 
    deletedAt = null, 
    updatedAt = $currentDate;

RETURN SELECT *, sender.*, receiver.* as user FROM ONLY $invitation LIMIT 1;

COMMIT;
`

type InsertInvitationValues = {
  lastChangedById: string
  receiverId: string
  senderId: string
  status?: InvitationStatusEnum
}

export const insertInvitation = async ({
  lastChangedById,
  receiverId,
  senderId,
  status = InvitationStatusEnum.pending,
}: InsertInvitationValues): Promise<InvitationEntity> => {
  const [invitationEntity] = await query<[InvitationEntity]>(QUERY, {
    lastChangedById,
    receiverId,
    senderId,
    status,
  })

  return invitationEntity
}
