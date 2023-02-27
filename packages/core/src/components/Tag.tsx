import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Tag = styled('div', {
  display: 'flex',
  maxWidth: 'max-content',
  alignItems: 'center',
  fontSize: '$xs',
  fontWeight: '$inter0',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 61,
  boxSizing: 'border-box',
  borderRadius: '$sm',
  padding: '$1 $4',

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$primaryDark',
      },

      secondary: {
        color: '$primaryDark',
        border: '.125rem solid $primaryDark',
      },

      tertiary: {
        color: '$secondaryPure',
        border: '.125rem solid $secondaryPure',
      },

      'primary-dark': {
        color: '$white',
        backgroundColor: '$primaryMedium',
      },

      'secondary-dark': {
        color: '$primaryPureAlpha',
        border: '.125rem solid $primaryPureAlpha',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface TagProps extends ComponentProps<typeof Tag> {
  as?: ElementType
}

Tag.displayName = 'Tag'
