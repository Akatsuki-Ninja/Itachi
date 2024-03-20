import { Outlet } from '@tanstack/react-router'

import { useAuth } from '@/web/auth'

export const App = () => {
  const { isFetched } = useAuth()

  if (!isFetched) {
    return null
  }

  return (
    <main>
      <Outlet />
    </main>
  )
}
