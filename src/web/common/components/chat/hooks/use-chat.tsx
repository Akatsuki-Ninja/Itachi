import { useCallback, useState } from 'react'

import type { DefaultEmptyType } from '@/common'
import { useProgressStatus } from '@/web/common'

import type { ChatUser } from '../library/create-chat-user-credentials'

import { type ChatChannel, useChatClient } from './use-chat-client'

export const useChat = () => {
  const { client, connectUser, joinChannel } = useChatClient()
  const [channel, setChannel] = useState<DefaultEmptyType<ChatChannel>>()
  const {
    isIdle,
    isProcessing,
    isRejected,
    isResolved,
    setProcessing,
    setRejected,
    setResolved,
  } = useProgressStatus()
  const [error, setError] = useState<DefaultEmptyType<Error>>()

  const setupChat = useCallback(
    ({ channelId, chatUser }: { channelId: string; chatUser: ChatUser }) => {
      if (!isIdle) return

      Promise.resolve(setProcessing)
        .then(() => error && setError(null))
        .then(() => connectUser(chatUser))
        .then(() =>
          setChannel(
            joinChannel(chatUser, {
              channelId,
              title: 'Talk about React',
            })
          )
        )
        .then(setResolved)
        .catch((error) => {
          setRejected()

          error instanceof Error && setError(error)
        })
    },
    [
      connectUser,
      error,
      isIdle,
      joinChannel,
      setProcessing,
      setRejected,
      setResolved,
    ]
  )

  return {
    channel,
    client,
    error,
    isIdle,
    isProcessing,
    isRejected,
    isResolved,
    setupChat,
  }
}
