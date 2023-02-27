import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Box = styled('div', {
  padding: '$4',

  variants: {
    variant: {
      primary: {
        background: '$white',
        boxShadow: '0 0.125rem 0.25rem rgba(69, 69, 69, 0.25)',

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

      quaternary: {
        background: '$white',
        border: '1px solid $neutralExtraLight',
        boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.08)',

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

    color: {
      white: {
        background: '$white !important',
      },
      black: {
        background: '$black !important',
      },
      neutralPure: {
        background: '$neutralPure !important',
      },
      neutralDark: {
        background: '$neutralDark !important',
      },
      neutralMedium: {
        background: '$neutralMedium !important',
      },
      neutralLight: {
        background: '$neutralLight !important',
      },
      neutralExtraLight: {
        background: '$neutralExtraLight !important',
      },
      backgroundDark: {
        background: '$backgroundDark !important',
      },
      backgroundLight: {
        background: '$backgroundLight !important',
      },
      backgroundGray: {
        background: '$backgroundGray !important',
      },
      primaryPure: {
        background: '$primaryPure !important',
      },
      primaryPureAlpha: {
        background: '$primaryPureAlpha !important',
      },
      primaryMedium: {
        background: '$primaryMedium !important',
      },
      primaryDark: {
        background: '$primaryDark !important',
      },
      primaryLight: {
        background: '$primaryLight !important',
      },
      primaryExtraLight: {
        background: '$primaryExtraLight !important',
      },
      secondaryPure: {
        background: '$secondaryPure !important',
      },
      secondaryMedium: {
        background: '$secondaryMedium !important',
      },
      secondaryLight: {
        background: '$secondaryLight !important',
      },
      feedbackDanger: {
        background: '$feedbackDanger !important',
      },
      feedbackSuccess: {
        background: '$feedbackSuccess !important',
      },
      feedbackInfo: {
        background: '$feedbackInfo !important',
      },
      feedbackWarning: {
        background: '$feedbackWarning !important',
      },
      feedbackAlert: {
        background: '$feedbackAlert !important',
      },
      feedbackDangerLight: {
        background: '$feedbackDangerLight !important',
      },
      feedbackSuccessLight: {
        background: '$feedbackSuccessLight !important',
      },
      feedbackInfoLight: {
        background: '$feedbackInfoLight !important',
      },
      feedbackWarningLight: {
        background: '$feedbackWarningLight !important',
      },
      feedbackAlertLight: {
        background: '$feedbackAlertLight !important',
      },
      feedbackInfoText: {
        background: '$feedbackInfoText !important',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    borderStyle: 'rounded',
  },
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
