import {
  type SignupCredentials,
  signup as signUpInToDatabase,
  type TemporalSignupCredentials,
} from '@/database'

import { saveToken } from '../library/manage-token'

export const signup = async (
  credentials: SignupCredentials | TemporalSignupCredentials
) => {
  const token = await signUpInToDatabase(credentials)

  saveToken(token)

  return token
}
