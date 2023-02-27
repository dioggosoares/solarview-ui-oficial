import * as Tabs from '@radix-ui/react-tabs'
import { styled } from '../../../styles'

export const TabListContainer = styled(Tabs.List, {
  display: 'flex',
  flexShrink: 0,
  whiteSpace: 'nowrap',

  variants: {
    orientation: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
        gap: '$2',
      },
    },
  },
})
