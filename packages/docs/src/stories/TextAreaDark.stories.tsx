import type { Meta, StoryObj } from '@storybook/react'
import { colors } from '@solarview-ui/tokens'
import { Message, TextArea, TextAreaProps } from '@solarview-ui/core'

export default {
  title: 'Form/TextArea/Dark Mode',
  component: TextArea,
  args: {
    mode: 'dark',
    disabled: false,
    bgColor: '#1d1d1d',
  },
  argTypes: {
    mode: {
      options: ['dark'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      control: {
        type: null,
      },
    },
    leftIcon: {
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
            backgroundColor: '#1d1d1d',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'example',
    label: 'Mensagem',
  },
}

export const Invalid: StoryObj<TextAreaProps> = {
  args: {
    leftIcon: <Message size={20} color={colors.white} />,
    placeholder: 'example',
    label: 'Mensagem',
    required: true,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'example',
    label: 'Mensagem',
    disabled: true,
  },
}

export const WithIcon: StoryObj<TextAreaProps> = {
  args: {
    leftIcon: <Message size={20} color={colors.white} />,
    placeholder: 'example',
    label: 'Mensagem',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
