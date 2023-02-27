import { ComponentProps, ElementType, ReactNode } from 'react'
import { ModalContainerRoot } from './styles'

export interface ModalRootProps
  extends ComponentProps<typeof ModalContainerRoot> {
  as?: ElementType
  children?: ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function ModalRoot({
  children,
  defaultOpen = false,
  open,
  onOpenChange,
  ...props
}: ModalRootProps) {
  return (
    <ModalContainerRoot
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      {...props}
    >
      {children}
    </ModalContainerRoot>
  )
}

ModalRoot.displayName = 'ModalRoot'
