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
          borderBottom: '0.063rem solid $neutralMedium',

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

    textColor: {
      white: {
        color: '$white !important',
        svg: {
          color: '$white !important',
        },
      },
      black: {
        color: '$black !important',
        svg: {
          color: '$black !important',
        },
      },
      neutralPure: {
        color: '$neutralPure !important',
        svg: {
          color: '$neutralPure !important',
        },
      },
      neutralDark: {
        color: '$neutralDark !important',
        svg: {
          color: '$neutralDark !important',
        },
      },
      neutralMedium: {
        color: '$neutralMedium !important',
        svg: {
          color: '$neutralMedium !important',
        },
      },
      neutralLight: {
        color: '$neutralLight !important',
        svg: {
          color: '$neutralLight !important',
        },
      },
      neutralExtraLight: {
        color: '$neutralExtraLight !important',
        svg: {
          color: '$neutralExtraLight !important',
        },
      },
      backgroundDark: {
        color: '$backgroundDark !important',
        svg: {
          color: '$backgroundDark !important',
        },
      },
      backgroundLight: {
        color: '$backgroundLight !important',
        svg: {
          color: '$backgroundLight !important',
        },
      },
      backgroundGray: {
        color: '$backgroundGray !important',
        svg: {
          color: '$backgroundGray !important',
        },
      },
      primaryPure: {
        color: '$primaryPure !important',
        svg: {
          color: '$primaryPure !important',
        },
      },
      primaryPureAlpha: {
        color: '$primaryPureAlpha !important',
        svg: {
          color: '$primaryPureAlpha !important',
        },
      },
      primaryMedium: {
        color: '$primaryMedium !important',
        svg: {
          color: '$primaryMedium !important',
        },
      },
      primaryDark: {
        color: '$primaryDark !important',
        svg: {
          color: '$primaryDark !important',
        },
      },
      primaryLight: {
        color: '$primaryLight !important',
        svg: {
          color: '$primaryLight !important',
        },
      },
      primaryExtraLight: {
        color: '$primaryExtraLight !important',
        svg: {
          color: '$primaryExtraLight !important',
        },
      },
      secondaryPure: {
        color: '$secondaryPure !important',
        svg: {
          color: '$secondaryPure !important',
        },
      },
      secondaryMedium: {
        color: '$secondaryMedium !important',
        svg: {
          color: '$secondaryMedium !important',
        },
      },
      secondaryLight: {
        color: '$secondaryLight !important',
        svg: {
          color: '$secondaryLight !important',
        },
      },
      feedbackDanger: {
        color: '$feedbackDanger !important',
        svg: {
          color: '$feedbackDanger !important',
        },
      },
      feedbackSuccess: {
        color: '$feedbackSuccess !important',
        svg: {
          color: '$feedbackSuccess !important',
        },
      },
      feedbackInfo: {
        color: '$feedbackInfo !important',
        svg: {
          color: '$feedbackInfo !important',
        },
      },
      feedbackWarning: {
        color: '$feedbackWarning !important',
        svg: {
          color: '$feedbackWarning !important',
        },
      },
      feedbackAlert: {
        color: '$feedbackAlert !important',
        svg: {
          color: '$feedbackAlert !important',
        },
      },
      feedbackDangerLight: {
        color: '$feedbackDangerLight !important',
        svg: {
          color: '$feedbackDangerLight !important',
        },
      },
      feedbackSuccessLight: {
        color: '$feedbackSuccessLight !important',
        svg: {
          color: '$feedbackSuccessLight !important',
        },
      },
      feedbackInfoLight: {
        color: '$feedbackInfoLight !important',
        svg: {
          color: '$feedbackInfoLight !important',
        },
      },
      feedbackWarningLight: {
        color: '$feedbackWarningLight !important',
        svg: {
          color: '$feedbackWarningLight !important',
        },
      },
      feedbackAlertLight: {
        color: '$feedbackAlertLight !important',
        svg: {
          color: '$feedbackAlertLight !important',
        },
      },
      feedbackInfoText: {
        color: '$feedbackInfoText !important',
        svg: {
          color: '$feedbackInfoText !important',
        },
      },
    },

    bgColor: {
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
