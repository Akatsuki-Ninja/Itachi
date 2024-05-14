import { useMemo } from 'react'

import { useAuth } from '@/web/auth'
import { createChatUserSignature } from '@/web/room'

export const useChatUserFromAuth = () => {
  const { data: user } = useAuth()

  if (!user) {
    throw new Error('User is not authenticated')
  }

  return useMemo(() => createChatUserSignature(user), [user])
}
