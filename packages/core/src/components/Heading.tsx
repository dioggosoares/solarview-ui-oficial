import { styled } from '../styles'
import { ComponentProps, ElementType } from 'react'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,

  variants: {
    size: {
      xxs: { fontSize: '$md' },
      xs: { fontSize: '$lg' },
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      xl: { fontSize: '$5xl' },
      '2xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
      '5xl': { fontSize: '$8xl' },
      '6xl': { fontSize: '$9xl' },
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

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
