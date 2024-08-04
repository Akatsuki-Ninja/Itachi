import type { SaveInvitationValues } from '@/store'

export type SendInvitationDto = Omit<SaveInvitationValues, 'roomId'>
