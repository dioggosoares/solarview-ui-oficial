import { styled } from '../../styles'

export const PlantStatusContainer = styled('div', {
  display: 'flex',
  maxWidth: 'max-content',
  alignItems: 'center',
  gap: '$1',
  fontSize: '$xs',
  fontWeight: '$inter2',
  fontFamily: '$default',

  variants: {
    colorScheme: {
      default: {
        color: '$neutralPure',
      },
      normal: {
        color: '$feedbackSuccess',
      },
      'sem-geracao': {
        color: '$feedbackDanger',
      },
      offline: {
        color: '$feedbackWarning',
      },
      'nao-monitorada': {
        color: '$secondaryMedium',
      },
    },
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  defaultVariants: {
    colorScheme: 'default',
  },
})
