import { Chat as ChatProvider } from 'stream-chat-react'
import 'stream-chat-react/dist/css/v2/index.css'
import { useEffect } from 'react'
import { Alert, AlertIcon } from '@chakra-ui/react'

import { Messenger } from './Messenger'
import { useChatUser } from './hooks/use-chat-user'
import { useChat } from './hooks/use-chat'

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

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <Alert status='error'>
      <AlertIcon />
      {message}
    </Alert>
  )
}
