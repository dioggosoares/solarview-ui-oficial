import type { Meta, StoryObj } from '@storybook/react'
import { Text, Checkbox, CheckboxProps } from '@solarview-ui/core'

export default {
  title: 'Form/Checkbox/Light Mode',
  component: Checkbox,
  args: {},
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
        <label
          style={{
            all: 'unset',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem',
            backgroundColor: '#fff',
            userSelect: 'none',
          }}
        >
          {Story()}
          <Text size="sm" css={{ marginLeft: '$2' }}>
            Aceitar os Termos de uso
          </Text>
        </label>
      )
    },
  ],
} as Meta<CheckboxProps>

export const checkbox: StoryObj<CheckboxProps> = {}
