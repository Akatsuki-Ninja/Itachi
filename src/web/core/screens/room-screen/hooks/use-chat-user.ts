import { useMemo } from 'react'

import { useGetFetchedAuth } from '@/web/auth'
import { createChatUserSignature } from '@/web/room'

export const useChatUserFromAuth = () => {
  const user = useGetFetchedAuth()

  return useMemo(() => createChatUserSignature(user), [user])
}
