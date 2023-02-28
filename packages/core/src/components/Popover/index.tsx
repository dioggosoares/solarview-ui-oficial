import { ComponentProps, ElementType, ReactNode } from 'react'
import { Close } from '../Icons/Close'
import {
  PopoverRoot,
  PopoverContent,
  PopoverTrigger,
  PopoverPortal,
  PopoverClose,
  PopoverArrow,
} from './styles'

export interface PopoverProps extends ComponentProps<typeof PopoverContent> {
  as?: ElementType
  content?: ReactNode | string
  closeIcon?: ReactNode
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  withClose?: boolean
  withArrow?: boolean
  sizeArrow?: {
    width?: number
    height?: number
  }
}

export function Popover({
  content,
  children,
  closeIcon,
  open,
  defaultOpen = false,
  onOpenChange,
  withClose = false,
  withArrow = true,
  sizeArrow = {
    width: 10,
    height: 5,
  },
  ...props
}: PopoverProps) {
  return (
    <PopoverRoot
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <PopoverTrigger {...props}>{children}</PopoverTrigger>
      <PopoverPortal>
        <PopoverContent {...props}>
          {content}
          {withArrow && (
            <PopoverArrow width={sizeArrow.width} height={sizeArrow.height} />
          )}
          {withClose && (
            <PopoverClose>
              <Close size={16} />
            </PopoverClose>
          )}
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  )
}

Popover.displayName = 'Popover'
