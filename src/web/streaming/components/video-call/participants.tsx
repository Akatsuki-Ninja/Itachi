import { Box, Flex } from '@chakra-ui/react'
import { ParticipantView, useCallStateHooks } from '@stream-io/video-react-sdk'

export const Participants = () => {
  const { useParticipants } = useCallStateHooks()
  const participants = useParticipants()

  return (
    <Flex
      flexDir={'column'}
      h={'100%'}
      justifyContent={'center'}
      sx={{ '.str-video__video': { width: '100%' } }}
    >
      {participants.map((participant) => (
        <Box
          flexShrink={0}
          key={participant.sessionId}
          w={'100%'}
        >
          <ParticipantView participant={participant} />
        </Box>
      ))}
    </Flex>
  )
}
