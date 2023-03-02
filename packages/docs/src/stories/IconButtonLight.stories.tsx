import type { Meta, StoryObj } from '@storybook/react'
import { IconButtonProps, IconButton, Share } from '@solarview-ui/core'

export default {
  title: 'Form/Icon Button/Light Mode',
  component: IconButton,
  args: {
    children: <Share />,
    mode: 'light',
    size: 'md',
    variant: 'rounded',
    disabled: false,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    variant: {
      options: ['pointed', 'rounded'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem',
            backgroundColor: '#fff',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<IconButtonProps>

export const Default: StoryObj<IconButtonProps> = {}

export const Disabled: StoryObj<IconButtonProps> = {
  args: {
    disabled: true,
  },
}
