import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@solarview-ui/core'

export default {
  title: 'Layout/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box.</Text>,
    variant: 'primary',
    borderStyle: 'rounded',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'dark'],
      control: {
        type: 'inline-radio',
      },
    },
    borderStyle: {
      options: ['pointed', 'rounded'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      control: {
        type: null,
      },
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
            backgroundColor: '#ececec',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const Secondary: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: StoryObj<BoxProps> = {
  args: {
    variant: 'tertiary',
  },
}

export const Quaternary: StoryObj<BoxProps> = {
  args: {
    variant: 'quaternary',
    color: 'backgroundGray',
    borderStyle: 'pointed',
  },
}

export const Dark: StoryObj<BoxProps> = {
  args: {
    variant: 'dark',
  },
}
