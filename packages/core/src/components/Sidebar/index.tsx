import { ComponentProps, ElementType, ReactNode, useState } from 'react'
import { Expand } from '../Icons/Expand'
import { Retract } from '../Icons/Retract'
import {
  SidebarContainer,
  SidebarRoot,
  ContainerTrigger,
  Trigger,
} from './styles'

export interface SidebarProps
  extends Omit<ComponentProps<typeof SidebarContainer>, 'open'> {
  as?: ElementType
  children?: ReactNode
  defaultOpen?: boolean
  open?: ComponentProps<typeof SidebarContainer>['open']
  onOpenChange?: (open: boolean) => void
}

export function Sidebar({
  defaultOpen = false,
  open = false,
  onOpenChange,
  children,
  ...props
}: SidebarProps) {
  const [toggleMenu, setToggleMenu] = useState(defaultOpen)

  function handleToggleMenu() {
    setToggleMenu((prevToggleMenu) => !prevToggleMenu)
  }

  return (
    <SidebarRoot>
      <ContainerTrigger>
        <Trigger onClick={handleToggleMenu}>
          {toggleMenu ? (
            <Retract size={20} color="#fff" />
          ) : (
            <Expand size={20} color="#fff" />
          )}
        </Trigger>
      </ContainerTrigger>

      <SidebarContainer
        data-state={toggleMenu ? 'open' : 'closed'}
        open={toggleMenu}
        defaultOpen={defaultOpen}
        {...props}
      >
        {children}
      </SidebarContainer>
    </SidebarRoot>
  )
}

Sidebar.displayName = 'Sidebar'
