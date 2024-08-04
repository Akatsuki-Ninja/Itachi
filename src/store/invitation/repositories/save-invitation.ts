import { query } from '@/database'

import {
  type InvitationEntity,
  InvitationStatusEnum,
} from '../entities/invitation-entity'

const QUERY = `
BEGIN;

LET $currentDate = time::now();

LET $invitation = INSERT INTO invitation {
  receiver: <record>$receiverId,
  sender: <record>$senderId,
  lastChangedBy: <record>$auth,
  room: <record>$roomId,
  status: $status,
  createdAt: $currentDate,
  updatedAt: $currentDate,
} ON DUPLICATE KEY UPDATE 
  receiver = <record>$input.receiverId, 
  sender = <record>$input.senderId, 
  room = <record>$input.roomId,
  lastChangedBy = $auth.id,
  status = $input.status, 
  updatedAt = $currentDate;

RETURN SELECT *, 
  sender.* as sender, 
  receiver.* as receiver, 
  room.* as room,
  status
  FROM ONLY invitation LIMIT 1;

COMMIT;
`

export type SaveInvitationValues = {
  receiverId: string
  roomId: string
  senderId: string
  status?: InvitationStatusEnum
}

export const saveInvitation = async ({
  status = InvitationStatusEnum.pending,
  ...restValues
}: SaveInvitationValues): Promise<InvitationEntity> => {
  const [invitationEntity] = await query<[InvitationEntity]>(QUERY, {
    ...restValues,
    status,
  })

  return invitationEntity
}
