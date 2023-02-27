import { styled } from '../../styles'

export const ButtonContainer = styled('a', {
  all: 'unset',
  display: 'flex',
  maxWidth: '17rem',
  alignItems: 'center',
  gap: '$5',
  padding: '$4',
  borderLeft: '2px solid transparent',

  cursor: 'pointer',
  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',

  p: {
    whiteSpace: 'nowrap',
  },

  '&:not(:disabled):hover': {
    background: '$secondaryMedium',
    borderLeft: '2px solid #fff',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-active="true"]': {
      background: '$secondaryMedium',
      borderLeft: '2px solid #fff',
    },
  },
})

export const IconRight = styled('div', {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'flex-end',
})
