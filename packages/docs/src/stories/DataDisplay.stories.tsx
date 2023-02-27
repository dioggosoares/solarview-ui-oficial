import type { Meta, StoryObj } from '@storybook/react'
import { TagProps, Tag } from '@solarview-ui/core'

export default {
  title: 'Data Display/Tag/Light Mode',
  component: Tag,
  args: {
    children: 'Tag Solar',
    variant: 'primary',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
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
          {Story()}
        </div>
      )
    },
  ],
} as Meta<TagProps>

export const Primary: StoryObj<TagProps> = {}
export const Secondary: StoryObj<TagProps> = {
  args: {
    variant: 'secondary',
    children: 'Tag Solar',
  },
}
