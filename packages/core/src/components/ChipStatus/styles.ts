import { styled } from '../../styles'

export const StatusContent = styled('span', {
  fontSize: '$xs',
  fontWeight: '$inter0',
  fontFamily: '$default',
})

export const TotalPlantsContent = styled('span', {
  fontSize: '$xs',
  fontWeight: '$inter1',
  fontFamily: '$default',
})

export const ChipStatusContainer = styled('button', {
  display: 'flex',
  maxWidth: '100%',
  alignItems: 'center',
  gap: '$2',
  fontSize: '$xs',
  fontWeight: '$inter0',
  fontFamily: '$default',
  borderRadius: '$pill',
  padding: '$2',

  borderWidth: '0.063rem',
  borderStyle: 'solid',
  borderColor: '$neutralMedium',

  transition: 'all 0.1s cubic-bezier(0.16, 1, 0.3, 1)',

  '&:focus': {
    outlineWidth: 0,
  },

  '&[data-state="true"]': {
    borderWidth: '0.125rem',

    'span:nth-child(1)': {
      fontWeight: '$inter1',
    },
  },

  '&[data-state="active"]': {
    borderWidth: '0.125rem',

    'span:nth-child(1)': {
      fontWeight: '$inter1',
    },
  },

  variants: {
    colorScheme: {
      default: {
        'span:nth-child(2)': {
          color: '$neutralPure',
        },

        '&:not(:disabled):hover': {
          borderColor: '$neutralPure',
        },

        '&[data-state="true"]': {
          borderColor: '$neutralPure',
        },

        '&[data-state="active"]': {
          borderColor: '$neutralPure',
        },
      },

      normal: {
        'span:nth-child(2)': {
          color: '$feedbackSuccess',
        },

        '&:not(:disabled):hover': {
          borderColor: '$feedbackSuccess',
        },

        '&[data-state="true"]': {
          borderColor: '$feedbackSuccess',
        },

        '&[data-state="active"]': {
          borderColor: '$feedbackSuccess',
        },
      },

      'sem-geracao': {
        'span:nth-child(2)': {
          color: '$feedbackDanger',
        },

        '&:not(:disabled):hover': {
          borderColor: '$feedbackDanger',
        },

        '&[data-state="true"]': {
          borderColor: '$feedbackDanger',
        },

        '&[data-state="active"]': {
          borderColor: '$feedbackDanger',
        },
      },

      offline: {
        'span:nth-child(2)': {
          color: '$feedbackWarning',
        },

        '&:not(:disabled):hover': {
          borderColor: '$feedbackWarning',
        },

        '&[data-state="true"]': {
          borderColor: '$feedbackWarning',
        },

        '&[data-state="active"]': {
          borderColor: '$feedbackWarning',
        },
      },

      'nao-monitorada': {
        'span:nth-child(2)': {
          color: '$secondaryMedium',
        },

        '&:not(:disabled):hover': {
          borderColor: '$secondaryMedium',
        },

        '&[data-state="true"]': {
          borderColor: '$secondaryMedium',
        },

        '&[data-state="active"]': {
          borderColor: '$secondaryMedium',
        },
      },
    },
  },

  defaultVariants: {
    colorScheme: 'default',
  },
})
