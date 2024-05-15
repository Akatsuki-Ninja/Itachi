import { useState } from 'react'
import { Box, Flex } from '@chakra-ui/react'

import { createChatToken, type DefaultEmptyType } from '@/common'

import { Messenger } from '../messenger'
import { VideoCall } from '../video-call'
import { ChatUserType } from '../../types/chat-user-type'

export const Stream = ({ id, user }: { id: string; user: ChatUserType }) => {
  const [token, setToken] = useState<DefaultEmptyType<string>>(null)

  if (!token) {
    createChatToken(user.id).then(setToken)

    return null
  }

  return (
    <Flex>
      <Box w={'50%'}>
        <VideoCall
          callId={id}
          token={token}
          user={user}
        />
      </Box>
      <Box w={'50%'}>
        <Messenger
          channelId={id}
          token={token}
          user={user}
        />
      </Box>
    </Flex>
  )
}