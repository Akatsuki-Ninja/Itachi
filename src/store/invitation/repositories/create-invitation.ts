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
};

RETURN SELECT *, user.* as user FROM ONLY $userLocation LIMIT 1;

COMMIT;
`

type CreateUserLocationValues = {
  lastChangedById?: string
  receiverId: string
  senderId: string
  status?: InvitationStatusEnum
}

export const createInvitation = async ({
  receiverId,
  senderId,
  lastChangedById = senderId,
  status = InvitationStatusEnum.pending,
}: CreateUserLocationValues): Promise<InvitationEntity> => {
  const [invitationEntity] = await query<[InvitationEntity]>(QUERY, {
    lastChangedById,
    receiverId,
    senderId,
    status,
  })

  return invitationEntity
}
