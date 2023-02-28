import type { Meta, StoryObj } from '@storybook/react'
import {
  Button,
  Popover,
  PopoverProps,
  User,
  Divider,
  ArrowRight,
  Tariffs,
  Invoice,
  Text,
} from '@solarview-ui/core'

export default {
  title: 'Overlay/Popover',
  component: Popover,
  args: {
    variant: 'primary',
    borderStyle: 'pointed',
    content: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '0.25rem',
          padding: '.75rem 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '0.5rem',
            padding: '0 .75rem',
          }}
        >
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <User size={20} />
            Gerenciar Conta
          </Button>

          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <Tariffs size={20} />
            Gerenciar Assinatura
          </Button>

          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <User size={20} />
            Gerenciar Colaboradores
          </Button>

          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <Invoice size={20} />
            Termos de Uso
          </Button>
        </div>
        <Divider
          color="neutralMedium"
          style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}
        />
        <div style={{ display: 'flex', width: '100%', paddingLeft: '0.75rem' }}>
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <ArrowRight size={20} />
            Sair
          </Button>
        </div>
      </div>
    ),
    children: (
      <button
        style={{
          display: 'flex',
          padding: '0.25rem',
          all: 'unset',
          cursor: 'pointer',
        }}
      >
        <User size={20} />
      </button>
    ),
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    borderStyle: {
      options: ['pointed', 'rounded'],
      control: {
        type: 'inline-radio',
      },
    },
    closeIcon: {
      control: {
        type: null,
      },
    },
    content: {
      control: {
        type: null,
      },
    },
    children: {
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '6rem',
              height: '4.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#f7f7f7',
            }}
          >
            {Story()}
          </div>
        </div>
      )
    },
  ],
} as Meta<PopoverProps>

export const PopOver: StoryObj<PopoverProps> = {}

export const PopOverWithClose: StoryObj<PopoverProps> = {
  args: {
    withClose: true,
    variant: 'primary',
    content: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '0.25rem',
          padding: '.75rem 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '0.5rem',
            padding: '0 .75rem',
          }}
        >
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <User size={20} />
            Gerenciar Conta
          </Button>
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <Tariffs size={20} />
            Gerenciar Assinatura
          </Button>
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <User size={20} />
            Gerenciar Colaboradores
          </Button>
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <Invoice size={20} />
            Termos de Uso
          </Button>
        </div>
        <Divider
          color="neutralMedium"
          style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}
        />
        <div style={{ display: 'flex', width: '100%', paddingLeft: '0.75rem' }}>
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <ArrowRight size={20} />
            Sair
          </Button>
        </div>
      </div>
    ),
    children: (
      <button
        style={{
          display: 'flex',
          padding: '0.25rem',
          all: 'unset',
          cursor: 'pointer',
        }}
      >
        <User size={20} />
      </button>
    ),
  },
}

export const PopOverWithHeader: StoryObj<PopoverProps> = {
  args: {
    withClose: true,
    variant: 'primary',
    content: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '0.25rem',
          padding: '.75rem 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '0.5rem',
            padding: '0 .75rem',
          }}
        >
          <Text
            size="sm"
            style={{ marginBottom: '.75rem', padding: '0 .75rem' }}
          >
            Menu
          </Text>
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <User size={20} />
            Gerenciar Conta
          </Button>
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <Tariffs size={20} />
            Gerenciar Assinatura
          </Button>
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <User size={20} />
            Gerenciar Colaboradores
          </Button>
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <Invoice size={20} />
            Termos de Uso
          </Button>
        </div>
        <Divider
          color="neutralMedium"
          style={{ marginTop: '0.75rem', marginBottom: '0.5rem' }}
        />
        <div style={{ display: 'flex', width: '100%', paddingLeft: '0.75rem' }}>
          <Button
            as="a"
            href="/"
            variant="tertiary"
            aspect="compress"
            size="sm"
            textColor="neutralPure"
          >
            <ArrowRight size={20} />
            Sair
          </Button>
        </div>
      </div>
    ),
    children: (
      <button
        style={{
          display: 'flex',
          padding: '0.25rem',
          all: 'unset',
          cursor: 'pointer',
        }}
      >
        <User size={20} />
      </button>
    ),
  },
}
