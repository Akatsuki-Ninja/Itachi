import {
  Channel,
  ChannelHeader,
  Chat as ChatProvider,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react'
import 'stream-chat-react/dist/css/v2/index.css'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Alert, AlertIcon } from '@chakra-ui/react'

import { useAuth } from '@/web/auth'
import { type DefaultEmptyType } from '@/common'
import { useProgressStatus } from '@/web/common'

import { type ChatChannel, useChatClient } from './hooks/use-chat-client'
import {
  type ChatUser,
  createChatUserCredentials,
} from './library/create-chat-user-credentials'

type ChatProps = {
  channelId: string
}

export const Chat = ({ channelId }: ChatProps) => {
  const chatUser = useChatUser()
  const { channel, client, error, isIdle, isRejected, isResolved, setupChat } =
    useChat()

  useEffect(() => {
    if (!chatUser) return

    setupChat({ channelId, chatUser })
  }, [channelId, chatUser, isIdle, setupChat])

  return (
    <ChatProvider client={client}>
      {isRejected && error && <ErrorMessage message={error.message} />}
      {isResolved && channel && <Messenger channel={channel} />}
    </ChatProvider>
  )
}

const useChatUser = () => {
  const { data: user } = useAuth()

  return useMemo(() => (user ? createChatUserCredentials(user) : null), [user])
}

const useChat = () => {
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

const Messenger = ({ channel }: { channel: ChatChannel }) => {
  return (
    <Channel channel={channel}>
      <Window>
        <ChannelHeader />
        <MessageList />
        <MessageInput />
      </Window>
      <Thread />
    </Channel>
  )
}

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <Alert status='error'>
      <AlertIcon />
      {message}
    </Alert>
  )
}
