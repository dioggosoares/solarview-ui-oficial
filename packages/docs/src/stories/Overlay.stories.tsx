import type { Meta, StoryObj } from '@storybook/react'
import { colors } from '@solarview-ui/tokens'
import {
  Modal,
  ModalProps,
  Button,
  TagIcon,
  Text,
  Close,
  TextInput,
  Trash,
  Plus,
} from '@solarview-ui/core'

export default {
  title: 'Overlay/Modal',
  component: Modal,
  args: {
    variant: 'primary',
    hasHeader: false,
    title: 'Lorem Ipsum',
    closeIcon: <Close />,
    size: 'md',
    children: (
      <Button variant="primary" aspect="stretch">
        Saiba mais
      </Button>
    ),
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
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
          {Story()}
        </div>
      )
    },
  ],
} as Meta<ModalProps>

export const ModalSimple: StoryObj<ModalProps> = {
  args: {
    size: 'lg',
    content: (
      <Text size="md" color="neutralPure">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto iure
        temporibus odit deserunt facere veniam, id officiis ullam natus, aliquid
        cupiditate animi alias totam, tempora qui. Eum fugiat molestias esse!
        <br />
        <br />
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section
        1.10.32.
      </Text>
    ),
  },
}

export const ModalFull: StoryObj<ModalProps> = {
  args: {
    children: (
      <Button variant="secondary" aspect="compress">
        <TagIcon size={16} />
        Tag
      </Button>
    ),
    hasHeader: true,
    title: 'Tags',
    closeIcon: <Close />,
    content: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          gap: '24px',
          padding: '0 8px',
        }}
      >
        <Text size="md" weight="normal">
          Adicione ou remova Tags para agrupar usinas.
        </Text>

        <div
          id="body"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <TextInput
              label="Tag 1"
              placeholder="tag1"
              style={{ width: '390px' }}
            />
            <Button variant="tertiary" size="sm" aspect="compress">
              <Trash size={16} color={colors.feedbackDanger} />
            </Button>
          </div>

          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <TextInput
              label="Tag 2"
              placeholder="tag2"
              style={{ width: '390px' }}
            />
            <Button variant="tertiary" size="sm" aspect="compress">
              <Trash size={16} color={colors.feedbackDanger} />
            </Button>
          </div>

          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <TextInput
              label="Tag 3"
              placeholder="tag3"
              style={{ width: '390px' }}
            />
            <Button variant="tertiary" size="sm" aspect="compress">
              <Trash size={16} color={colors.feedbackDanger} />
            </Button>
          </div>

          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <TextInput
              label="Tag 4"
              placeholder="tag4"
              style={{ width: '390px' }}
            />
            <Button variant="tertiary" size="sm" aspect="compress">
              <Trash size={16} color={colors.feedbackDanger} />
            </Button>
          </div>

          <Button variant="tertiary" size="sm">
            <Plus size={10} />
            Criar nova Tag
          </Button>
        </div>

        <footer
          style={{
            display: 'flex',
            width: '100%',
            gap: '16px',
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginTop: '24px',
          }}
        >
          <Button variant="quaternary" size="md">
            Cancelar
          </Button>
          <Button variant="primary" size="md">
            Salvar
          </Button>
        </footer>
      </div>
    ),
  },
}
