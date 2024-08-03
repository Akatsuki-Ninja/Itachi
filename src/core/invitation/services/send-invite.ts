import { createRoom, getSession, saveInvitation } from '@/store'

import type { InviteDto } from '../dto/invite-dto'
import type { SendInviteDto } from '../dto/send-invite-dto'

export const sendInvite = async (
  inviteDto: SendInviteDto
): Promise<InviteDto> => {
  await getSession()

  const room = await createRoom()

  return await saveInvitation({
    ...inviteDto,
    roomId: room.id,
  })
}
