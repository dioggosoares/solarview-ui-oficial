import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@solarview-ui/core'

export default {
  title: 'Surfaces/Card/Light Mode',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box.</Text>,
    variant: 'primary',
  },
  argTypes: {
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
            backgroundColor: '#fff',
          }}
        >
          <Text>Breve</Text>
        </div>
      )
    },
  ],
} as Meta<BoxProps>

export const Card: StoryObj<BoxProps> = {}
