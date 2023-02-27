import type { Meta, StoryObj } from '@storybook/react'
import { colors } from '@solarview-ui/tokens'
import {
  AlertCircle,
  Lock,
  TextInput,
  TextInputProps,
  User,
  View,
} from '@solarview-ui/core'

export default {
  title: 'Form/TextField/Light Mode',
  component: TextInput,
  args: {
    disabled: false,
    bgColor: '#fff',
  },
  argTypes: {
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
    rightIcon: {
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
          {Story()}
        </div>
      )
    },
  ],
} as Meta<TextInputProps>

export const Default: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'example@email.com',
    label: 'Nome',
  },
}

export const Invalid: StoryObj<TextInputProps> = {
  args: {
    type: 'email',
    leftIcon: <User size={20} />,
    placeholder: 'example@email.com',
    rightIcon: <AlertCircle size={16} color={colors.feedbackDanger} />,
    defaultValue: 'dioggosoares@.com',
    label: 'E-mail',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'example@email.com',
    label: 'E-mail',
    disabled: true,
  },
}

export const WithIcon: StoryObj<TextInputProps> = {
  args: {
    leftIcon: <User size={20} />,
    rightIcon: <AlertCircle size={16} color={colors.feedbackDanger} />,
    placeholder: 'example@email.com',
    label: 'E-mail',
    type: 'email',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export const Password: StoryObj<TextInputProps> = {
  args: {
    type: 'password',
    leftIcon: <Lock size={20} />,
    rightIcon: <View size={16} />,
    placeholder: 'example@email.com',
    label: 'Senha',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
