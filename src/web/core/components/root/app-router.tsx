import { RouterProvider } from '@tanstack/react-router'

import { router } from '../../routes/app-router.tsx'

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
