import { useDisclosure } from '@chakra-ui/react'
import { type ReactNode, useCallback, useMemo } from 'react'

import { context } from './use-modal-context'

export type ModalState = ReturnType<typeof useDisclosure>

type ModalProviderProps = {
  children: ReactNode
  onClose?: (ctx: ModalState) => void
  onOpen?: (ctx: ModalState) => void
}

export const ModalProvider = ({
  children,
  onClose,
  onOpen,
}: ModalProviderProps) => {
  const disclosure = useDisclosure()

  const open = useCallback(() => {
    if (onOpen) {
      onOpen(disclosure)
    } else {
      disclosure.onOpen()
    }
  }, [disclosure, onOpen])

  const close = useCallback(() => {
    if (onClose) {
      onClose(disclosure)
    } else {
      disclosure.onClose()
    }
  }, [disclosure, onClose])

  const ctx = useMemo(
    () => ({
      close,
      isOpen: disclosure.isOpen,
      open,
    }),
    [close, disclosure.isOpen, open]
  )

  return <context.Provider value={ctx}>{children}</context.Provider>
}
