import { useMemo } from 'react'

import { useAuth } from '@/web/auth'

import { createChatUserSignature } from '../../../services/create-chat-user-signature'

export const useChatUser = () => {
  const { data: user } = useAuth()

  return useMemo(() => (user ? createChatUserSignature(user) : null), [user])
}
