import { StreamVideoClient } from '@stream-io/video-react-sdk'

import { API_KEY } from './api-key'

export const createVideoClient = () => {
  return new StreamVideoClient(API_KEY)
}
