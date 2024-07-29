import { cloneElement, type ReactElement, useCallback } from 'react'

import { useModalContext } from './use-modal-context'

export const ModalCloseButton = ({ children }: { children: ReactElement }) => {
  const { close } = useModalContext()

  const onClick = useCallback(
    (e: any) => {
      close()
      children.props?.onClick?.(e)
    },
    [children.props, close]
  )

  return cloneElement(children, {
    onClick,
  })
}
