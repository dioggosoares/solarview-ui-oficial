import type { Meta, StoryObj } from '@storybook/react'
import {
  Sidebar,
  SidebarButton,
  SidebarProps,
  ToolTip,
  Integration,
  Medal,
} from '@solarview-ui/core'

export default {
  title: 'Navigation/Sidebar',
  component: Sidebar,
  args: {
    defaultOpen: false,
    open: false,
    children: (
      <SidebarButton
        name="Integração"
        leftIcon={
          <ToolTip variant="dark" content="Integração" side="top" withArrow>
            <Integration size={20} color="#fff" />
          </ToolTip>
        }
        rightIcon={<Medal size={20} color="#f8a918" />}
      />
    ),
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
    defaultOpen: {
      control: {
        type: 'boolean',
      },
    },
    open: {
      control: {
        type: 'boolean',
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
              height: '10%',
              minHeight: '200px',
              overflow: 'hidden',
              padding: '24px 0',
            }}
          >
            {Story()}
          </div>
        </div>
      )
    },
  ],
} as Meta<SidebarProps>

export const SidebarBase: StoryObj<SidebarProps> = {}
