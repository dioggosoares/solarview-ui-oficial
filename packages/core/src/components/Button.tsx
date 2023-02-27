import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  fontSize: '$sm',
  fontWeight: '$inter1',
  fontFamily: '$default',
  textAlign: 'center',
  width: '100%',
  maxWidth: 'max-content',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$3',

  cursor: 'pointer',
  transition: '0.2s ease-out',
  transitionDelay: '150ms',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primaryPure',
        border: '1px solid $primaryPure',
        borderRadius: '$xs',

        '&:not(:disabled):hover': {
          backgroundColor: '$primaryMedium',
          border: '.0625rem solid $primaryMedium',
        },

        '&:disabled': {
          backgroundColor: '$neutralMedium',
          opacity: 0.5,
        },

        '&:focus': {
          outlineWidth: 0,
          outline: 'none',
          border: '.0625rem solid $neutralPure',

          transition: '0.2s ease-linear',
          transitionDelay: '150ms',
        },
      },

      secondary: {
        color: '$neutralPure',
        border: '.0625rem solid $neutralMedium',
        borderRadius: '$xs',
        backgroundColor: '$white',

        '&:not(:disabled):hover': {
          color: '$primaryPure',
          border: '.0625rem solid $primaryPure',
          svg: {
            color: '$primaryPure',
            transition: '0.2s ease-out',
            transitionDelay: '150ms',
          },
        },

        '&:disabled': {
          color: '$neutralMedium',
          borderColor: '$neutralMedium',
          opacity: 0.5,
        },

        '&:focus': {
          outlineWidth: 0,
          outline: 'none',
          border: '.0625rem solid $neutralPure',

          transition: '0.2s ease-linear',
          transitionDelay: '150ms',
        },
      },

      tertiary: {
        color: '$primaryPure',

        '&:not(:disabled):hover': {
          color: '$primaryMedium',
          svg: {
            color: '$primaryMedium',
            transition: '0.2s ease-out',
            transitionDelay: '150ms',
          },
        },

        '&:disabled': {
          color: '$neutralMedium',
          opacity: 0.5,
        },

        '&:focus': {
          outlineWidth: 0,
          borderBottom: '.0938rem solid $neutralPure',

          transition: '0.2s ease-linear',
          transitionDelay: '150ms',
        },
      },

      quaternary: {
        color: '$neutralPure',
        background: '$neutralExtraLight',
        border: '.0625rem solid $neutralExtraLight',
        borderRadius: '$xs',

        '&:not(:disabled):hover': {
          backgroundColor: '$neutralLight',
          border: '.0625rem solid $neutralLight',
        },

        '&:disabled': {
          backgroundColor: '$neutralMedium',
          opacity: 0.5,
        },

        '&:focus': {
          outlineWidth: 0,
          border: '.0625rem solid $neutralPure',

          transition: '0.2s ease-linear',
          transitionDelay: '150ms',
        },
      },

      'primary-dark': {
        color: '$white',
        backgroundColor: '$primaryPure',
        border: '.0625rem solid $primaryPure',
        borderRadius: '$xs',

        '&:not(:disabled):hover': {
          backgroundColor: '$primaryLight',
        },

        '&:disabled': {
          backgroundColor: '$neutralDark',
          opacity: 0.5,
        },

        '&:focus': {
          outlineWidth: 0,
          border: '.0625rem solid $neutralPure',

          transition: '0.2s ease-linear',
          transitionDelay: '150ms',
        },
      },

      'secondary-dark': {
        color: '$primaryPure',
        border: '.0625rem solid $neutralDark',
        borderRadius: '$xs',

        '&:not(:disabled):hover': {
          color: '$primaryLight',
          border: '.0625rem solid $primaryLight',
        },

        '&:disabled': {
          color: '$neutralDark',
          borderColor: '$neutralDark',
          opacity: 0.5,
        },

        '&:focus': {
          outlineWidth: 0,
          border: '.0625rem solid $neutralDark',

          transition: '0.2s ease-linear',
          transitionDelay: '150ms',
        },
      },

      'tertiary-dark': {
        color: '$primaryPure',

        '&:not(:disabled):hover': {
          color: '$primaryLight',
        },

        '&:disabled': {
          color: '$neutralDark',
          opacity: 0.5,
        },

        '&:focus': {
          outlineWidth: 0,
          borderBottom: '.0938rem solid $neutralDark',

          transition: '0.2s ease-linear',
          transitionDelay: '150ms',
        },
      },
    },

    size: {
      sm: {
        height: 26,
        fontSize: '$sm',
      },

      md: {
        height: 42,
        fontSize: '$md',
      },

      lg: {
        height: 48,
        fontSize: '$lg',
      },
    },

    aspect: {
      compress: {
        padding: '$2 $2',
      },
      stretch: {
        padding: '$2 $3',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    aspect: 'stretch',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
