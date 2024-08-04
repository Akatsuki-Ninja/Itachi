import { createRoom, getSession, saveInvitation } from '@/store'

import type { InvitationDto } from '../dto/invitation-dto'
import type { SendInvitationDto } from '../dto/send-invitation-dto'

export const sendInvitation = async (
  inviteDto: SendInvitationDto
): Promise<InvitationDto> => {
  await getSession()

  const room = await createRoom()

  return await saveInvitation({
    ...inviteDto,
    roomId: room.id,
  })
}
