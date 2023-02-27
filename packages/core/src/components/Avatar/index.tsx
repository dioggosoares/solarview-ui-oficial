import { ComponentProps } from 'react'
import { capitalizeLetters } from '../../utils/capitalize'
import { NoImage } from '../Icons/NoImage'
import {
  AvatarContainer,
  AvatarImage,
  AvatarText,
  AvatarFallback,
} from './styles'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  name?: string
  fallbacktype?: 'icon' | 'name'
  colorScheme?: 'primary' | 'secondary' | 'tertiary'
  typeData?: 'image' | 'text'
}

export function Avatar({
  name,
  fallbacktype,
  colorScheme,
  typeData = 'image',
  children,
  ...props
}: AvatarProps) {
  return (
    <AvatarContainer>
      {typeData === 'image' ? (
        <>
          <AvatarImage {...props} />

          <AvatarFallback delayMs={600} colorScheme={colorScheme}>
            {fallbacktype === 'name' ? (
              capitalizeLetters(name ?? '')
            ) : (
              <NoImage />
            )}
          </AvatarFallback>
        </>
      ) : (
        <AvatarText {...props}>{children}</AvatarText>
      )}
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
