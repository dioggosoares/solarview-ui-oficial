import * as Popover from '@radix-ui/react-popover'
import { styled } from '../../styles'

export const PopoverRoot = styled(Popover.Root, {})

export const PopoverTrigger = styled(Popover.Trigger, {})

export const PopoverAnchor = styled(Popover.Anchor, {})

export const PopoverPortal = styled(Popover.Portal, {})

export const PopoverClose = styled(Popover.Close, {
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  padding: '$2',

  svg: {
    width: '$4',
    height: '$4',
  },
})

export const PopoverArrow = styled(Popover.Arrow, {
  fill: '$white',
})

export const PopoverContent = styled(Popover.Content, {
  display: 'flex',
  padding: '$1 0',
  margin: '0 $2 0 0',

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
        background: '$neutralExtraLight',
        border: '1px solid $primaryMedium',

        p: {
          color: '$neutralPure',
        },
      },

      tertiary: {
        background: '$neutralExtraLight',
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
    borderStyle: 'pointed',
  },
})
