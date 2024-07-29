import { type ReactNode, useCallback, useMemo } from 'react'

import { useAuth } from '@/web/auth'
import { getToken } from '@/web/auth/library/manage-token'
import { ModalProvider, type ModalState } from '@/web/common'

import { enterModalContext } from './use-enter-modal'

type EnterModalProviderProps = {
  children: ReactNode
  onEnter: (token: string) => void
}

export const EnterModalProvider = ({
  children,
  onEnter,
}: EnterModalProviderProps) => {
  const ctx = useMemo(() => ({ onEnter }), [onEnter])

  const { data: user } = useAuth()
  const handleOpen = useCallback(
    (state: ModalState) => {
      if (user) {
        onEnter(getToken())
      } else {
        state.onOpen()
      }
    },
    [onEnter, user]
  )

  return (
    <ModalProvider onOpen={handleOpen}>
      <enterModalContext.Provider value={ctx}>
        {children}
      </enterModalContext.Provider>
    </ModalProvider>
  )
}
