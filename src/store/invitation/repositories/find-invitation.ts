import { query } from '@/database'
import type { InvitationEntity } from '@/store'

/**
 * Add limitation, by updated at or other
 */
const QUERY = `
SELECT *, 
  sender.* as sender, 
  receiver.* as receiver, 
  room.* as room,
  FROM ONLY invitation;
  WHERE id = $userId;
`

export type FindInvitationValues = {
  receiverId?: string
  senderId?: string
}

export const findInvitation = async (
  values: FindInvitationValues
): Promise<InvitationEntity[]> => {
  const [invitationEntity] = await query<[InvitationEntity[]]>(QUERY, values)

  return invitationEntity
}
