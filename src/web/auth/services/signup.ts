import { signup as dbSignup, SignupDto, TemporalSignupDto } from '@/database'

import { saveToken } from '../library/manage-token.ts'

export const signup = async (credentials: SignupDto | TemporalSignupDto) => {
  const token = await dbSignup(credentials)

  saveToken(token)

  return token
}
