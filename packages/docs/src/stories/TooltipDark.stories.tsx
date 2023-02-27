import type { Meta, StoryObj } from '@storybook/react'
import { Text, ToolTip, TooltipProps } from '@solarview-ui/core'

export default {
  title: 'Overlay/Tooltip/Dark Mode',
  component: ToolTip,
  args: {
    children: <Text css={{ color: '#fff' }}>Lorem ipsum dolor.</Text>,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget mi eu justo imperdiet congue id eu orci. Cras vehicula nunc eu mi efficitur porta. Sed porta velit et luctus tempor.',
    variant: 'light',
    withArrow: true,
  },
  argTypes: {
    variant: {
      options: ['light'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      control: {
        type: null,
      },
    },
    open: {
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem',
            backgroundColor: '#1d1d1d',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<TooltipProps>

export const Tooltip: StoryObj<TooltipProps> = {}
