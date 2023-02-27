import { ComponentProps, ReactNode } from 'react'
import { Divider } from '../Divider'
import { Text } from '../Text'
import { Container, HeaderContainer, Logo, Modulo } from './styles'

export interface HeaderProps
  extends Omit<ComponentProps<typeof HeaderContainer>, 'size'> {
  icon?: ReactNode
  logo?: ReactNode
  mode?: ComponentProps<typeof HeaderContainer>['mode']
  moduleName?: string
}

export function Header({
  children,
  icon,
  logo,
  moduleName,
  ...props
}: HeaderProps) {
  return (
    <HeaderContainer {...props}>
      <Container>
        <Modulo>
          {icon}
          <Text size="2xl">{moduleName}</Text>
        </Modulo>
        <Divider
          color="neutralExtraLight"
          orientation="vertical"
          hLine="40px"
        />
        <Logo>{logo}</Logo>
      </Container>
      {children}
    </HeaderContainer>
  )
}

Header.displayName = 'Header'
