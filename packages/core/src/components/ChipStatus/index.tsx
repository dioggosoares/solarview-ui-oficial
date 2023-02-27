import { ComponentProps, useState } from 'react'
import {
  ChipStatusContainer,
  StatusContent,
  TotalPlantsContent,
} from './styles'

export interface ChipStatusProps
  extends Omit<ComponentProps<typeof ChipStatusContainer>, 'colorScheme'> {
  defaultState?: boolean
  status?: string
  totalPlants?: string | number
  colorScheme?: ComponentProps<typeof ChipStatusContainer>['colorScheme']
}

export function ChipStatus({
  status,
  defaultState = false,
  colorScheme,
  totalPlants,
  ...props
}: ChipStatusProps) {
  const [toggleChip, setToggleChip] = useState(defaultState)

  function handleToggleChip() {
    setToggleChip((prevToggleChip) => !prevToggleChip)
  }

  return (
    <ChipStatusContainer
      colorScheme={colorScheme}
      data-state={toggleChip ? 'active' : 'inactive'}
      onClick={handleToggleChip}
      {...props}
    >
      <StatusContent data-state={toggleChip ? 'active' : 'inactive'}>
        {status}
      </StatusContent>
      <TotalPlantsContent data-state={toggleChip ? 'active' : 'inactive'}>
        {totalPlants}
      </TotalPlantsContent>
    </ChipStatusContainer>
  )
}

ChipStatus.displayName = 'ChipStatus'
