import { StreamChat } from 'stream-chat'

const apiKey = 'athncwx6uezf'

export const createChatClient = () => {
  return new StreamChat(apiKey)
}
