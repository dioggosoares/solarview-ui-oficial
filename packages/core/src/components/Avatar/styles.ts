import * as Avatar from '@radix-ui/react-avatar'
import { styled } from '../../styles'

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$pill',
  display: 'inline-block',
  width: '$8',
  height: '$8',
  overflow: 'hidden',
})

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

export const AvatarText = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'inherit',

  fontSize: '$xs',
  fontWeight: '$inter1',
  fontFamily: '$default',

  backgroundColor: '$backgroundGray',
})

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  fontFamily: '$default',

  variants: {
    colorScheme: {
      primary: {
        backgroundColor: '$neutralDark',
      },
      secondary: {
        backgroundColor: '$primaryPure',
      },
      tertiary: {
        backgroundColor: '$secondaryPure',
      },
    },
  },

  svg: {
    width: '$6',
    height: '$6',
  },

  defaultVariants: {
    colorScheme: 'primary',
  },
})
