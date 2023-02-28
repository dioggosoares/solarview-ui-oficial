import { ComponentProps, ElementType, ReactNode } from 'react'
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
  children?: ReactNode
  content?: ReactNode | string
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  withArrow?: boolean
  sizeArrow?: {
    width?: number
    height?: number
  }
}

export function Popover({
  content,
  children,
  open,
  defaultOpen = false,
  onOpenChange,
  withArrow = false,
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
          <PopoverClose />
          <PopoverArrow />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  )
}

Popover.displayName = 'Popover'
