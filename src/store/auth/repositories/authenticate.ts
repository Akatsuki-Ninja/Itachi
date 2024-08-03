import { authenticate as authenticateInDb } from '@/database'

import type { UserToken } from '../types/user-token'

export type AuthValues = { token: UserToken }

export const authenticate = async (values: AuthValues): Promise<boolean> =>
  await authenticateInDb(values)
