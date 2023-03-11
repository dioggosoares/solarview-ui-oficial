import type { Meta, StoryObj } from '@storybook/react'
import { ProgressProps, Progress } from '@solarview-ui/core'

export default {
  title: 'Progress Indicators/Progress/Light Mode',
  component: Progress,
  args: {
    colorScheme: 'primaryMedium',
    size: 40,
    shrink: false,
    speed: 'walk',
  },
  argTypes: {
    speed: {
      options: ['snail', 'walk', 'run', 'bolt'],
      control: {
        type: 'inline-radio',
      },
    },
    shrink: {
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
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem',
            backgroundColor: '#fff',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 'max-content',
              borderRadius: '0.5rem',
              padding: '6px',
              backgroundColor: '#ececec',
            }}
          >
            {Story()}
          </div>
        </div>
      )
    },
  ],
} as Meta<ProgressProps>

export const progress: StoryObj<ProgressProps> = {}
