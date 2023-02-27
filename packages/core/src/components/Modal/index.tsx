import { ComponentProps, ElementType, ReactNode } from 'react'
import {
  ModalContainerRoot,
  ModalTrigger,
  ModalPortal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalClose,
  ModalTitle,
} from './styles'

export interface ModalProps extends ComponentProps<typeof ModalContainerRoot> {
  as?: ElementType
  children?: ReactNode
  content?: ReactNode | string
  contentFooter?: ReactNode
  closeIcon?: ReactNode
  hasHeader?: boolean
  hasFooter?: boolean
  title?: ReactNode | string
  defaultOpen?: boolean
  modal?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  borderStyle?: ComponentProps<typeof ModalContent>['borderStyle']
  size?: ComponentProps<typeof ModalContent>['size']
  color?: ComponentProps<typeof ModalContent>['color']
  variant?: ComponentProps<typeof ModalContent>['variant']
}

export function Modal({
  children,
  content,
  contentFooter,
  closeIcon,
  hasHeader = false,
  hasFooter = false,
  title,
  defaultOpen = false,
  modal = true,
  borderStyle,
  variant,
  size,
  color,
  open,
  onOpenChange,
  ...props
}: ModalProps) {
  return (
    <ModalContainerRoot
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
      {...props}
    >
      <ModalTrigger>{children}</ModalTrigger>

      <ModalPortal>
        <ModalOverlay />
        <ModalContent
          variant={variant}
          borderStyle={borderStyle}
          color={color}
          size={size}
        >
          {hasHeader && (
            <ModalHeader>
              <ModalTitle>{title}</ModalTitle>
              <ModalClose>{closeIcon}</ModalClose>
            </ModalHeader>
          )}
          {content}
        </ModalContent>
        {hasFooter && contentFooter}
      </ModalPortal>
    </ModalContainerRoot>
  )
}

Modal.displayName = 'Modal'
