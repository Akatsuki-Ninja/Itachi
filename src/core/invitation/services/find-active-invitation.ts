import {
  findActiveInvitation as findInvitationInStore,
  getSession,
} from '@/store'

import type { FindActiveInvitationDto } from '../dto/find-active-invitation-dto'
import type { InvitationDto } from '../dto/invitation-dto'

export const findActiveInvitation = async (
  dto: FindActiveInvitationDto
): Promise<InvitationDto> => {
  await getSession()

  return await findInvitationInStore(dto)
}
