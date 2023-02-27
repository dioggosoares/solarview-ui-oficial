import { ComponentProps, ElementType } from 'react'
import { ModalContainerTrigger } from './styles'

export interface ModalTriggerProps
  extends ComponentProps<typeof ModalContainerTrigger> {
  as?: ElementType
}

export function ModalTrigger({ children, ...props }: ModalTriggerProps) {
  return <ModalContainerTrigger {...props}>{children}</ModalContainerTrigger>
}

ModalTrigger.displayName = 'ModalTrigger'
