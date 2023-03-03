import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps, Dot } from '@solarview-ui/core'

export default {
  title: 'Form/Button Shadow/Light Mode',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    aspect: 'stretch',
    size: 'md',
    disabled: false,
    active: false,
  },
  argTypes: {
    active: {
      control: {
        type: 'boolean',
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
          {Story()}
        </div>
      )
    },
  ],
} as Meta<ButtonProps>

export const ButtonShadow: StoryObj<ButtonProps> = {
  args: {
    variant: 'shadow',
    colorScheme: 'sem-geracao',
    active: false,
    children: (
      <>
        CARE T8M - UFV GERALDO CRUZ
        <Dot />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    aspect: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
}
