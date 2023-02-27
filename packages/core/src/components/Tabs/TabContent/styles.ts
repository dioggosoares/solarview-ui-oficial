import * as Tabs from '@radix-ui/react-tabs'
import { keyframes, styled } from '../../../styles'

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-0.188rem)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

export const TabContainer = styled(Tabs.Content, {
  display: 'flex',
  width: '100%',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '1s',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="active"]': { animationName: slideDownAndFade },
  },
})
