import { styled } from '../../styles'

export const HeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: '4.5rem',
  padding: '0.313rem $6',
  borderRadius: '$sm',
  backgroundColor: '$white',

  variants: {
    variant: {
      primary: {
        background: '$white',
        boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.08)',

        p: {
          color: '$neutralPure',
        },
      },

      secondary: {
        background: '$white',
        border: '1px solid $primaryMedium',

        p: {
          color: '$neutralPure',
        },
      },

      tertiary: {
        background: '$white',
        border: '1px solid $neutralMedium',

        p: {
          color: '$neutralPure',
        },
      },

      dark: {
        background: '$backgroundDark',

        p: {
          color: '$white',
        },
      },
    },

    borderStyle: {
      pointed: {
        borderRadius: 0,
      },

      rounded: {
        borderRadius: '$sm',
      },
    },

    mode: {
      light: {},
      dark: {},
    },
  },

  defaultVariants: {
    variant: 'primary',
    borderStyle: 'pointed',
  },
})

export const Container = styled('div', {
  display: 'flex',
  padding: '$1 $2',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Modulo = styled('div', {
  display: 'flex',
  gap: '$3',
  padding: '$1 $8 $1 $2',
  alignItems: 'center',
  justifyContent: 'space-between',

  '@media(max-width: 768px)': {
    flexDirection: 'column',
  },
})

export const Logo = styled('div', {
  display: 'flex',
  padding: '$1 $2 $1 $8',
  alignItems: 'center',
})

export const Divider = styled('div', {
  display: 'flex',
  width: '0.063rem',
  height: '$10',
  backgroundColor: '$neutralExtraLight',
})
