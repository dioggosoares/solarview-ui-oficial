import { ComponentProps } from 'react'
import { Dot } from '../Icons/Dot'
import { PlantStatusContainer } from './styles'

export interface PlantStatusProps
  extends Omit<ComponentProps<typeof PlantStatusContainer>, 'colorScheme'> {
  status?: string
  colorScheme?: ComponentProps<typeof PlantStatusContainer>['colorScheme']
}

export function PlantStatus({ status, colorScheme }: PlantStatusProps) {
  return (
    <PlantStatusContainer colorScheme={colorScheme}>
      <Dot />
      {status}
    </PlantStatusContainer>
  )
}

PlantStatus.displayName = 'PlantStatus'
