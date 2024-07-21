import { cloneElement, type ReactElement, useCallback } from 'react'

import { useModalContext } from './use-modal-context'

export const ModalOpenButton = ({ children }: { children: ReactElement }) => {
  const { open } = useModalContext()

  const onClick = useCallback(
    (e: any) => {
      open()
      children.props?.onClick?.(e)
    },
    [children.props, open]
  )

  return cloneElement(children, {
    onClick,
  })
}
