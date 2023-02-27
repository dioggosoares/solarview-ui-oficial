import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@solarview-ui/core'
import { Plus } from 'phosphor-react'

export default {
  title: 'Form/Button/Dark Mode',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary-dark',
    aspect: 'stretch',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary-dark', 'secondary-dark', 'tertiary-dark'],
      control: {
        type: 'inline-radio',
      },
    },
    aspect: {
      options: ['compress', 'stretch'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg'],
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
            backgroundColor: '#1d1d1d',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary-dark',
    children: 'Button',
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary-dark',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Plus weight="bold" />
        Button
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
