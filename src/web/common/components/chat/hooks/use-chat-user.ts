import { useMemo } from 'react'

import { useAuth } from '@/web/auth'

import { createChatUserCredentials } from '../library/create-chat-user-credentials'

export const useChatUser = () => {
  const { data: user } = useAuth()

  return useMemo(() => (user ? createChatUserCredentials(user) : null), [user])
}
