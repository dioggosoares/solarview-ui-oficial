import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const DividerStyle = styled('div', {
  display: 'flex',

  variants: {
    orientation: {
      horizontal: {
        width: '100%',
        height: '0.063rem !important',
      },
      vertical: {
        width: '0.063rem',
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
    orientation: 'horizontal',
  },
})

export interface DividerProps
  extends Omit<ComponentProps<typeof DividerStyle>, 'orientation'> {
  as?: ElementType
  orientation?: ComponentProps<typeof DividerStyle>['orientation']
  hLine?: string | number
}

export function Divider({ hLine, orientation, ...props }: DividerProps) {
  return (
    <DividerStyle
      {...props}
      orientation={orientation}
      css={{ height: hLine }}
    />
  )
}

Divider.displayName = 'Divider'
