import { ComponentProps, ElementType, ReactNode } from 'react'
import {
  PopoverRoot,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
  PopoverPortal,
  PopoverClose,
  PopoverArrow,
} from './styles'

export interface PopoverProps extends ComponentProps<typeof PopoverContent> {
  as?: ElementType
  children?: ReactNode
  content?: ReactNode | string
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  withArrow?: boolean
}

export function Popover({
  content,
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  withArrow = false,
  ...props
}: PopoverProps) {
  return (
    <PopoverRoot>
      <PopoverTrigger {...props}>{children}</PopoverTrigger>
      <PopoverAnchor />

      <PopoverPortal>
        <PopoverContent>
          <PopoverClose />
          <PopoverArrow />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  )
}

Popover.displayName = 'Popover'
