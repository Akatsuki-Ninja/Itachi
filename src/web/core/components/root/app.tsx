import { ReactNode } from 'react'

import { useAuth } from '@/web/auth'

export const App = ({ children }: { children: ReactNode }) => {
  const { isFetched } = useAuth()

  if (!isFetched) {
    return null
  }

  return <main>{children}</main>
}
