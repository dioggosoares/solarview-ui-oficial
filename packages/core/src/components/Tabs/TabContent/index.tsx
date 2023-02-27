import { ComponentProps, ElementType, ReactNode } from 'react'
import { TabContainer } from './styles'

export interface TabsProps extends ComponentProps<typeof TabContainer> {
  as?: ElementType
  children?: ReactNode
  defaultValue?: string
  value: string
  onValueChange?: (value: string) => void
  orientation?: 'horizontal' | 'vertical'
}

export function TabContent({
  children,
  value = 'd',
  onValueChange,
  defaultValue = '',
  orientation = 'horizontal',
  ...props
}: TabsProps) {
  return <TabContainer value={value}>{children}</TabContainer>
}

TabContent.displayName = 'TabContent'
