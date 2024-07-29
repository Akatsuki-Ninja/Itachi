import { createContext, useContext } from 'react'

export const context = createContext<{
  close: () => void
  isOpen: boolean
  open: () => void
} | null>(null)

export const useModalContext = () => {
  const ctx = useContext(context)

  if (!ctx) {
    throw new Error('hook should be wrapped in to ModalProvider.')
  }

  return ctx
}
