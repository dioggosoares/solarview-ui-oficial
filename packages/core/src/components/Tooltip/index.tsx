import * as Tooltip from '@radix-ui/react-tooltip'
import { ComponentProps, ElementType, ReactNode } from 'react'
import { TooltipContent, TooltipTrigger } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
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

export function ToolTip({
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
}: TooltipProps) {
  return (
    <Tooltip.Provider delayDuration={200} skipDelayDuration={0}>
      <Tooltip.Root
        open={open}
        defaultOpen={defaultOpen}
        onOpenChange={onOpenChange}
      >
        <TooltipTrigger>{children}</TooltipTrigger>
        <Tooltip.Portal>
          <TooltipContent {...props}>
            {content}
            {withArrow && (
              <Tooltip.Arrow
                width={sizeArrow.width}
                height={sizeArrow.height}
              />
            )}
          </TooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

ToolTip.displayName = 'ToolTip'
