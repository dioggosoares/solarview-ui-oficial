import { ComponentProps, ElementType, ReactNode } from 'react'
import { Text } from '../Text'
import { ButtonContainer, IconRight } from './styles'

export interface SidebarButtonProps
  extends ComponentProps<typeof ButtonContainer> {
  as?: ElementType
  children?: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  name?: string
  active?: boolean
}

export function SidebarButton({
  leftIcon,
  rightIcon,
  name,
  active,
  children,
  ...props
}: SidebarButtonProps) {
  return (
    <ButtonContainer data-active={active} {...props}>
      {leftIcon}
      <Text size="md" color="white">
        {name}
      </Text>
      {rightIcon && <IconRight>{rightIcon}</IconRight>}
    </ButtonContainer>
  )
}

SidebarButton.displayName = 'SidebarButton'
