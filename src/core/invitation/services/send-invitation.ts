import { createRoom, getSession, saveInvitation } from '@/store'

import type { InvitationDto } from '../dto/invitation-dto'
import type { SendInvitationDto } from '../dto/send-invitation-dto'

export const sendInvitation = async (
  inviteDto: SendInvitationDto
): Promise<InvitationDto> => {
  await getSession()

  let roomId = inviteDto.roomId

  if (!roomId) {
    const room = await createRoom()
    roomId = room.id
  }

  /**
   * questions: what if this is accepting?
   *
   * check if user are busy
   * throw error -> user busy
   */

  return await saveInvitation({
    ...inviteDto,
    roomId,
  })
}
