import { query } from '@/database'
import { type InvitationEntity, InvitationStatusEnum } from '@/store'

export type FindActiveInvitationValues = {
  receiverId?: string
  senderId?: string
}

export const findActiveInvitation = async (
  values: FindActiveInvitationValues
): Promise<InvitationEntity> => {
  const participatesWhere = []
  if (values.senderId) {
    participatesWhere.push(`sender = $senderId`)
  }
  if (values.receiverId) {
    participatesWhere.push(`receiver = $receiverId`)
  }

  const QUERY = `
    SELECT *, 
      sender.* as sender, 
      receiver.* as receiver, 
      room.* as room
    FROM ONLY invitation
    WHERE 
      duration::from::secs(10) - time::now() <= updatedAt
    AND status != '${InvitationStatusEnum.rejected}'
      ${participatesWhere.length ? `AND ${participatesWhere.join(' OR ')}` : ''}
    LIMIT 1
  `

  const [invitationEntity] = await query<InvitationEntity[]>(QUERY, values)

  return invitationEntity
}
