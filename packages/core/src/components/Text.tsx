import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
      '2xl': { fontSize: '$2xl' },
      '4xl': { fontSize: '$4xl' },
      '5xl': { fontSize: '$5xl' },
      '6xl': { fontSize: '$6xl' },
      '7xl': { fontSize: '$7xl' },
      '8xl': { fontSize: '$8xl' },
      '9xl': { fontSize: '$9xl' },
    },

    weight: {
      normal: {
        fontWeight: '$inter0 !important',
      },

      medium: {
        fontWeight: '$inter1 !important',
      },

      semibold: {
        fontWeight: '$inter2 !important',
      },
    },

    color: {
      white: {
        color: '$white !important',
      },
      black: {
        color: '$black !important',
      },
      neutralPure: {
        color: '$neutralPure !important',
      },
      neutralDark: {
        color: '$neutralDark !important',
      },
      neutralMedium: {
        color: '$neutralMedium !important',
      },
      neutralLight: {
        color: '$neutralLight !important',
      },
      neutralExtraLight: {
        color: '$neutralExtraLight !important',
      },
      backgroundDark: {
        color: '$backgroundDark !important',
      },
      backgroundLight: {
        color: '$backgroundLight !important',
      },
      backgroundGray: {
        color: '$backgroundGray !important',
      },
      primaryPure: {
        color: '$primaryPure !important',
      },
      primaryPureAlpha: {
        color: '$primaryPureAlpha !important',
      },
      primaryMedium: {
        color: '$primaryMedium !important',
      },
      primaryDark: {
        color: '$primaryDark !important',
      },
      primaryLight: {
        color: '$primaryLight !important',
      },
      primaryExtraLight: {
        color: '$primaryExtraLight !important',
      },
      secondaryPure: {
        color: '$secondaryPure !important',
      },
      secondaryMedium: {
        color: '$secondaryMedium !important',
      },
      secondaryLight: {
        color: '$secondaryLight !important',
      },
      feedbackDanger: {
        color: '$feedbackDanger !important',
      },
      feedbackSuccess: {
        color: '$feedbackSuccess !important',
      },
      feedbackInfo: {
        color: '$feedbackInfo !important',
      },
      feedbackWarning: {
        color: '$feedbackWarning !important',
      },
      feedbackAlert: {
        color: '$feedbackAlert !important',
      },
      feedbackDangerLight: {
        color: '$feedbackDangerLight !important',
      },
      feedbackSuccessLight: {
        color: '$feedbackSuccessLight !important',
      },
      feedbackInfoLight: {
        color: '$feedbackInfoLight !important',
      },
      feedbackWarningLight: {
        color: '$feedbackWarningLight !important',
      },
      feedbackAlertLight: {
        color: '$feedbackAlertLight !important',
      },
      feedbackInfoText: {
        color: '$feedbackInfoText !important',
      },
    },
  },

  defaultVariants: {
    size: 'md',
    color: 'neutralPure',
  },
})

export interface TextProps extends ComponentProps<typeof Text> {
  as?: ElementType
}

Text.displayName = 'Text'
