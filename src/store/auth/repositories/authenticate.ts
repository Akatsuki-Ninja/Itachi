import { authenticate as authenticateInDb } from '@/database'

export const authenticate = async ({ token }: { token: string }) =>
  await authenticateInDb(token)
