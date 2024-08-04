import { findInvitation as findInvitationInStore, getSession } from '@/store'

import type { FindInvitationDto } from '../dto/find-invitation-dto'
import type { InvitationDto } from '../dto/invitation-dto'

export const findInvitation = async (
  dto: FindInvitationDto
): Promise<InvitationDto[]> => {
  await getSession()

  return await findInvitationInStore(dto)
}
