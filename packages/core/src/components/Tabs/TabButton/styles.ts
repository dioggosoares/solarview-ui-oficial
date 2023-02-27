import * as Tabs from '@radix-ui/react-tabs'
import { styled } from '../../../styles'

export const TriggerContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '8.75rem',
  borderTopLeftRadius: '$xs',
  borderTopRightRadius: '$xs',
  cursor: 'pointer',

  transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',

  '&:not(:disabled):hover': {
    backgroundColor: '$primaryPure',
  },

  '&:has(button[data-state="active"])': {
    backgroundColor: '$primaryPure',
    borderTopLeftRadius: '$xs',
    borderTopRightRadius: '$xs',
  },

  '&:has(button[aria-selected="true"])': {
    backgroundColor: '$primaryPure',
    borderTopLeftRadius: '$xs',
    borderTopRightRadius: '$xs',
  },
})

export const TabsTrigger = styled(Tabs.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.625rem',
  width: '100%',
  maxWidth: '8.75rem',
  padding: '$3 $4',
  whiteSpace: 'nowrap',

  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',

  '&:focus': {
    outlineWidth: 0,
    border: '0 solid transparent',
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="active"]': {
      transform: 'translateY(-0.313rem)',
      backgroundColor: '$primaryPure',
      borderTopLeftRadius: '$xs',
      borderTopRightRadius: '$xs',
      minWidth: '8.75rem',
      minHeight: '3.25rem',
      color: '$white',
    },

    '&[aria-selected="true"]': {
      transform: 'translateY(-0.313rem)',
      backgroundColor: '$primaryPure',
      borderTopLeftRadius: '$xs',
      borderTopRightRadius: '$xs',
      minWidth: '8.75rem',
      minHeight: '3.25rem',
      color: '$white',
    },

    '&[aria-selected="false"]': {
      backgroundColor: '$white',
      borderRadius: '0',
      minWidth: '8.75rem',
      minHeight: '2.625rem',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '$backgroundGray',

      '&:not(:disabled):hover': {
        transform: 'translateY(-0.313rem)',
        backgroundColor: '$primaryPure',
        borderTopLeftRadius: '$xs',
        borderTopRightRadius: '$xs',
        minHeight: '3.25rem',
        color: '$white',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '$primaryPure',
      },
    },

    '&[data-state="inactive"]': {
      backgroundColor: '$white',
      borderRadius: '0',
      minWidth: '8.75rem',
      minHeight: '2.625rem',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '$backgroundGray',

      '&:not(:disabled):hover': {
        transform: 'translateY(-0.313rem)',
        backgroundColor: '$primaryPure',
        borderTopLeftRadius: '$xs',
        borderTopRightRadius: '$xs',
        minHeight: '3.25rem',
        color: '$white',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: '$primaryPure',
      },
    },
  },
})
