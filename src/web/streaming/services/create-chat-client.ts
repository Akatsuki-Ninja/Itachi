import { StreamChat } from 'stream-chat'

import { API_KEY } from './api-key'

export const createChatClient = () => {
  return new StreamChat(API_KEY)
}
