import * as Tabs from '@radix-ui/react-tabs'
import { styled } from '../../../styles'

export const TabContainerRoot = styled(Tabs.Root, {
  display: 'flex',
  width: '100%',

  variants: {
    orientation: {
      horizontal: {
        flexDirection: 'column',
      },
      vertical: {
        flexDirection: 'row',
      },
    },
  },

  defaultVariants: {
    orientation: 'horizontal',
  },
})
