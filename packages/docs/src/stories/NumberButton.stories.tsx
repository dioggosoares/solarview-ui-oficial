import type { Meta, StoryObj } from '@storybook/react'
import {
  NumberButtonProps,
  NumberButton,
  ArrowLeft,
  ArrowRight,
} from '@solarview-ui/core'

export default {
  title: 'Navigation/Pagination',
  component: NumberButton,
  args: {
    children: '1',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary'],
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: 'max-content',
              gap: '1rem',
              padding: '0 1rem',
            }}
          >
            <ArrowLeft size={16} />
            {Story()}
            <ArrowRight size={16} />
          </div>
        </div>
      )
    },
  ],
} as Meta<NumberButtonProps>

export const PaginationButton: StoryObj<NumberButtonProps> = {}
