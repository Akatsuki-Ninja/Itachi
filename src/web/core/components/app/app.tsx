import { useEffect } from 'react'
import { WelcomeScreen } from '@/web/common'
import { removeToken, useAuthQuery } from '@/web/auth'

export const App = () => {
  const { isError, isFetched } = useAuthQuery()

  useEffect(() => {
    if (isError) {
      removeToken()
    }
  }, [isError, isFetched])

  if (!isFetched) {
    return null
  }

  return (
    <main>
      <WelcomeScreen />
    </main>
  )
}
