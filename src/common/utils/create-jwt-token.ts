import { SignJWT } from 'jose'

export const createChatToken = async (userId: string) => {
  return await new SignJWT({ user_id: userId })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('2h')
    .sign(new TextEncoder().encode('your-256-bit-secret'))
}
