import {
  Modal as CharkaModal,
  ModalBody,
  ModalCloseButton as ModalCloseOverlayButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react'
import { type ReactNode } from 'react'

import { useModalContext } from './use-modal-context'

export const Modal = ({ children }: { children: ReactNode }) => {
  const { close, isOpen } = useModalContext()

  return (
    <CharkaModal
      isOpen={isOpen}
      onClose={close}
    >
      {children}
    </CharkaModal>
  )
}

export {
  ModalBody,
  ModalCloseOverlayButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
}
