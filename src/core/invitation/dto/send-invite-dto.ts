import type { SaveInvitationValues } from '@/store'

export type SendInviteDto = Omit<SaveInvitationValues, 'roomId'>
