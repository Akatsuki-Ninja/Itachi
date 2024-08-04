import { query } from '@/database'
import type { InvitationEntity } from '@/store'

const QUERY = `
  SELECT *, 
    sender.* as sender, 
    receiver.* as receiver, 
    room.* as room FROM invitation
    // now - 10sec <= updatedAt <= now
`

export type FindInvitationValues = {
  receiverId?: string
  senderId?: string
}

export const findInvitation = async (
  values: FindInvitationValues
): Promise<InvitationEntity[]> => {
  const whereFields = []
  if (values.senderId) {
    whereFields.push(`sender = $senderId`)
  }
  if (values.receiverId) {
    whereFields.push(`receiver = $receiverId`)
  }
  whereFields.push('duration::from::secs(10) - time::now() <= updatedAt')

  let rawQuery = QUERY

  if (whereFields.length) {
    rawQuery.replace(';', '')
    rawQuery = `${rawQuery} WHERE ${whereFields.join(' AND ')}`
  }

  const [results] = await query<[InvitationEntity[]]>(rawQuery, values)

  return results
}
