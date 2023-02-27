import { styled } from '../../styles'

export const IconButtonContainer = styled('button', {
  all: 'unset',
  border: '1px solid $neutralMedium',
  cursor: 'pointer',

  display: 'flex',
  alignItems: 'center',
  transition: '0.5s ease-in-out',

  '&:disabled': {
    border: '1px solid $neutralMedium',
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      pointed: {
        borderRadius: 0,
      },
      rounded: {
        borderRadius: '$xs',
      },
      'right-rounded': {
        borderTopRightRadius: '$xs',
        borderBottomRightRadius: '$xs',
      },
      'left-rounded': {
        borderTopLeftRadius: '$xs',
        borderBottomLeftRadius: '$xs',
      },
    },

    size: {
      sm: {
        padding: '0.375rem',

        svg: {
          width: '$4',
          height: '$4',
        },
      },

      md: {
        padding: '$2',

        svg: {
          width: '$5',
          height: '$5',
        },
      },

      lg: {
        padding: '0.625rem',

        svg: {
          width: '26px',
          height: '26px',
        },
      },
    },

    mode: {
      light: {
        '&:not(:disabled):hover': {
          backgroundColor: '$primaryLight',
        },

        '&:focus': {
          borderColor: '$neutralPure',
          zIndex: 2,
        },

        '&:not(:disabled):active': {
          backgroundColor: '$primaryMedium',
        },

        svg: {
          color: '$neutralPure',
        },
      },
      dark: {
        '&:not(:disabled):hover': {
          backgroundColor: '$primaryDark',
        },

        '&:focus': {
          borderColor: '$white',
          zIndex: 2,
        },

        '&:not(:disabled):active': {
          backgroundColor: '$primaryMedium',
        },

        svg: {
          color: '$white',
        },
      },
    },
  },

  defaultVariants: {
    mode: 'light',
    variant: 'rounded',
    size: 'sm',
  },
})

export const Icon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
