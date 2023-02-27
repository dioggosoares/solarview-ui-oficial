import { ComponentProps, ElementType, ReactNode } from 'react'
import { TabListContainer } from './styles'

export interface TabListProps
  extends Omit<ComponentProps<typeof TabListContainer>, 'orientation'> {
  as?: ElementType
  children?: ReactNode
  orientation?: ComponentProps<typeof TabListContainer>['orientation']
}

export function TabList({ children, orientation, ...props }: TabListProps) {
  return (
    <TabListContainer
      {...props}
      orientation={orientation}
      data-orientation={orientation}
      aria-orientation={orientation}
    >
      {children}
    </TabListContainer>
  )
}

TabList.displayName = 'TabList'
