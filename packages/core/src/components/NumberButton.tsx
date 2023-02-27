import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const NumberButtonContainer = styled('a', {
  all: 'unset',
  fontSize: '$sm',
  fontWeight: '$inter1',
  fontFamily: '$default',
  textAlign: 'center',
  width: '100%',
  maxWidth: '28px',
  boxSizing: 'border-box',
  padding: '$1 10px',

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
        color: '$neutralPure',
        borderRadius: '$xs',

        '&:not(:disabled):hover': {
          background: '$primaryMedium',
          color: '$white',
        },

        '@media (prefers-reduced-motion: no-preference)': {
          '&[data-active="true"]': {
            background: '$primaryPure',
            color: '$white',
          },
        },

        '&:disabled': {
          background: '$neutralMedium',
          opacity: 0.5,
        },

        '&:focus': {
          outlineWidth: 0,
          border: '.0625rem solid $neutralPure',

          transition: '0.2s ease-linear',
          transitionDelay: '150ms',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export interface NumberButtonProps
  extends ComponentProps<typeof NumberButtonContainer> {
  as?: ElementType
  active?: boolean
}

export function NumberButton({
  active,
  children,
  ...props
}: NumberButtonProps) {
  return (
    <NumberButtonContainer data-active={active} {...props}>
      {children}
    </NumberButtonContainer>
  )
}

NumberButton.displayName = 'NumberButton'
