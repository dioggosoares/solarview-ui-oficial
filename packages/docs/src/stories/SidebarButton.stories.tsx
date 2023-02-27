import type { Meta, StoryObj } from '@storybook/react'
import {
  Integration,
  Medal,
  SidebarButton,
  SidebarButtonProps,
} from '@solarview-ui/core'

export default {
  title: 'Navigation/Sidebar',
  component: SidebarButton,
  args: {
    name: 'Integração',
    leftIcon: <Integration size={20} color="#fff" />,
    rightIcon: <Medal size={20} color="#f8a918" />,
  },
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
              flexDirection: 'column',
              alignItems: 'flex-start',
              minHeight: '5px',
              overflow: 'hidden',
              backgroundColor: '#0f3e60',
              padding: '24px 0',
            }}
          >
            {Story()}
          </div>
        </div>
      )
    },
  ],
} as Meta<SidebarButtonProps>

export const Sidebarbutton: StoryObj<SidebarButtonProps> = {}
