import type { Meta, StoryObj } from '@storybook/react'
import { Shower } from '@solarview-ui/core'

export default {
  title: 'Layout/Icons',
  component: Shower,
  args: {
    size: 32,
  },
  argTypes: {},
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 'max-content',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#fff',
            }}
          >
            {Story()}
          </div>
        </div>
      )
    },
  ],
} as Meta

export const shower: StoryObj = {}
