import type { Meta, StoryObj } from '@storybook/react'
import { ChipStatusProps, ChipStatus } from '@solarview-ui/core'

export default {
  title: 'Data Display/ChipStatus/Light Mode',
  component: ChipStatus,
  args: {
    colorScheme: 'normal',
    status: 'Normal',
    totalPlants: '90',
  },
  argTypes: {
    colorScheme: {
      options: ['normal', 'sem-geracao', 'offline', 'nao-monitorada'],
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
          {Story()}
        </div>
      )
    },
  ],
} as Meta<ChipStatusProps>

export const Normal: StoryObj<ChipStatusProps> = {}
export const SemGeração: StoryObj<ChipStatusProps> = {
  args: {
    colorScheme: 'sem-geracao',
    status: 'Sem Geração',
    totalPlants: '888',
  },
}
export const Offline: StoryObj<ChipStatusProps> = {
  args: {
    colorScheme: 'offline',
    status: 'Offline',
    totalPlants: '50',
  },
}
export const NaoMonitorada: StoryObj<ChipStatusProps> = {
  args: {
    colorScheme: 'nao-monitorada',
    status: 'Não Monitorada',
    totalPlants: '70',
  },
}
