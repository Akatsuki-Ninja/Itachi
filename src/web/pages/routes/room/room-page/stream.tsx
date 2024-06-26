import { Box, Flex } from '@chakra-ui/react'
import { useState } from 'react'

import { createChatToken, type DefaultEmptyType } from '@/common'
import { type ChatUserType, Messenger, VideoCall } from '@/web/streaming'

export const Stream = ({ id, user }: { id: string; user: ChatUserType }) => {
  const [token, setToken] = useState<DefaultEmptyType<string>>(null)

  if (!token) {
    createChatToken(user.id).then(setToken)

    return null
  }

  return (
    <Flex minH={'100vh'}>
      <Box>
        <VideoCall
          callId={id}
          token={token}
          user={user}
        />
      </Box>
      <Box
        flexShrink={0}
        w={'300px'}
      >
        <Messenger
          channelId={id}
          token={token}
          user={user}
        />
      </Box>
    </Flex>
  )
}
