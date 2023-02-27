import { ComponentProps, ElementType, ReactNode } from 'react'
import { ModalContainerPortal } from './styles'

export interface ModalPortalProps
  extends ComponentProps<typeof ModalContainerPortal> {
  as?: ElementType
  children?: ReactNode
}

export function ModalPortal({ children, ...props }: ModalPortalProps) {
  return <ModalContainerPortal {...props}>{children}</ModalContainerPortal>
}

ModalPortal.displayName = 'ModalPortal'
