import type { Meta, StoryObj } from '@storybook/react'
import { TagButtonProps, TagButton } from '@solarview-ui/core'

export default {
  title: 'Data Display/TagButton/Light Mode',
  component: TagButton,
  args: {
    children: 'Clientes Novos',
    disabled: false,
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
            backgroundColor: '#fff',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<TagButtonProps>

export const tagbutton: StoryObj<TagButtonProps> = {}
