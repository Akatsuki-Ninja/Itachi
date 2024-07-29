import { createContext, useContext } from 'react'

export const enterModalContext = createContext<{
  onEnter: (token: string) => void
} | null>(null)

export const useEnterModal = () => {
  const ctx = useContext(enterModalContext)

  if (!ctx) {
    throw new Error('hook should be wrapped in to EnterModalProvider.')
  }

  return ctx
}
