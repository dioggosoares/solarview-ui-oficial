import { ComponentProps, ElementType, ReactNode } from 'react'
import { TabContainerRoot } from './styles'

export interface TabRootProps
  extends Omit<ComponentProps<typeof TabContainerRoot>, 'orientation'> {
  as?: ElementType
  children?: ReactNode
  defaultValue?: string
  orientation?: ComponentProps<typeof TabContainerRoot>['orientation']
}

export function TabRoot({
  children,
  defaultValue,
  orientation,
  ...props
}: TabRootProps) {
  return (
    <TabContainerRoot
      defaultValue={defaultValue}
      orientation={orientation}
      data-orientation={orientation}
      {...props}
    >
      {children}
    </TabContainerRoot>
  )
}

TabRoot.displayName = 'TabRoot'
