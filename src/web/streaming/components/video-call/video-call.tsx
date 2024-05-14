import {
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  User,
} from '@stream-io/video-react-sdk'
import { Box } from '@chakra-ui/react'

const apiKey = 'your-api-key'
const userId = 'user-id'
const token = 'authentication-token'
const user: User = { id: userId }

const client = new StreamVideoClient({ apiKey, token, user })
const call = client.call('default', 'my-first-call')
call.join({ create: true })

export const VideoCall = () => {
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
        <Box>Controls</Box>
      </StreamCall>
    </StreamVideo>
  )
}
