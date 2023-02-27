import { ComponentProps, ElementType, ReactNode } from 'react'
import { TabsTrigger, TriggerContainer } from '../TabButton/styles'

export interface TabButtonProps extends ComponentProps<typeof TabsTrigger> {
  as?: ElementType
  children?: ReactNode
  defaultState?: boolean
  value: string
  onValueChange?: (value: string) => void
}

export function TabButton({
  children,
  defaultState,
  value,
  onValueChange,
  ...props
}: TabButtonProps) {
  return (
    <>
      <TriggerContainer>
        <TabsTrigger {...props} value={value}>
          {children}
        </TabsTrigger>
      </TriggerContainer>
    </>
  )
}

TabButton.displayName = 'TabButton'
