import * as Tooltip from '@radix-ui/react-tooltip'
import { keyframes, styled } from '../../styles'

export const TooltipPortal = styled(Tooltip.Portal, {})

export const TooltipProvider = styled(Tooltip.Provider, {})

export const TooltipContainer = styled(Tooltip.Root, {})

export const TooltipTrigger = styled(Tooltip.Trigger, {
  all: 'unset',
  display: 'flex',
})

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(0.125rem)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-0.125rem)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-0.125rem)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(0.125rem)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const TooltipContent = styled(Tooltip.Content, {
  display: 'flex',
  maxWidth: '16rem',
  fontSize: '$xs',
  fontWeight: '$inter0',
  fontFamily: '$default',
  borderRadius: '$xs',
  padding: '$2 $4',
  letterSpacing: '$base',
  margin: '0.125rem',
  zIndex: 999,

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '1s',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },

  variants: {
    variant: {
      light: {
        color: '$neutralPure',
        backgroundColor: '$neutralExtraLight',

        svg: {
          fill: '$neutralExtraLight',
        },
      },

      dark: {
        color: '$white',
        backgroundColor: '$neutralPure',

        svg: {
          fill: '$neutralPure',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'dark',
  },
})
