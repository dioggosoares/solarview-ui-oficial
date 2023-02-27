import { ComponentProps } from 'react'
import { IconButtonContainer } from './styles'

export interface IconButtonProps
  extends Omit<ComponentProps<typeof IconButtonContainer>, 'size'> {
  mode?: ComponentProps<typeof IconButtonContainer>['mode']
  size?: ComponentProps<typeof IconButtonContainer>['size']
}

export function IconButton({ children, size, ...props }: IconButtonProps) {
  return (
    <IconButtonContainer size={size} {...props}>
      {children}
    </IconButtonContainer>
  )
}

IconButton.displayName = 'IconButton'
