import type { Meta, StoryObj } from '@storybook/react'
import { AvatarProps, Avatar, Box } from '@solarview-ui/core'

export default {
  title: 'Data Display/Avatar/Light Mode',
  component: Avatar,
  args: {
    colorScheme: 'primary',
    typeData: 'image',
  },
  argTypes: {
    colorScheme: {
      options: ['primary', 'secondary', 'tertiary'],
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
          <Box color="neutralExtraLight">{Story()}</Box>
        </div>
      )
    },
  ],
} as Meta<AvatarProps>

export const FallBack: StoryObj<AvatarProps> = {
  args: {
    src: 'url-de-uma-imagem-que-nao-carrega',
  },
}

export const WithImage: StoryObj<AvatarProps> = {
  args: {
    src: 'https://api-v2.solarview.com.br/storage/images/logos/sma.png',
  },
}

export const WithText: StoryObj<AvatarProps> = {
  args: {
    typeData: 'text',
    children: '10',
  },
}
