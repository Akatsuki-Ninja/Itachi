import { RouterProvider } from '@tanstack/react-router'

import { router } from './library/app-routing.tsx'

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
