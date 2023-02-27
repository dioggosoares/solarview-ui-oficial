import { styled } from '../../styles'
import { Text } from '../Text'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const TextAreaContainer = styled('div', {
  position: 'relative',
  padding: '$3 $4',
  borderRadius: '$xs',
  boxSizing: 'border-box',
  border: '0.063rem solid $neutralMedium',

  display: 'flex',
  minHeight: '12.188rem',
  alignItems: 'flex-start',
  transition: '0.5s ease-in-out',

  svg: {
    marginTop: '$1',
  },

  variants: {
    mode: {
      light: {
        border: '0.063rem solid $neutralMedium',

        '&:has(textarea:focus)': {
          borderColor: '$primaryMedium',
        },

        '&:has(textarea:focus) > label': {
          top: '-0.688rem',
          left: '$3',
          padding: '0 $1',
          fontSize: '$xs',
          backgroundColor: 'inherit',
          whiteSpace: 'nowrap',
        },

        '&:has(textarea:not(:placeholder-shown)) > label': {
          top: '-0.688rem',
          left: '$3',
          padding: '0 $1',
          fontSize: '$xs',
          backgroundColor: 'inherit',
          whiteSpace: 'nowrap',
        },

        '&:has(svg) > textarea': {
          padding: '0 $3',
        },

        '&:has(textarea:invalid)': {
          borderColor: '$feedbackDanger',
        },

        '&:has(textarea:invalid) > label': {
          color: '$feedbackDanger',
        },

        '&:has(textarea:invalid) > div:nth-child(3) > button > svg': {
          color: '$feedbackDanger',
        },

        '&:has(textarea:disabled)': {
          opacity: 0.5,
          cursor: 'not-allowed',
          backgroundColor: '$neutralExtraLight',
        },

        '&:has(textarea:disabled) > label': {
          backgroundColor: '$neutralExtraLight',
          'user-select': 'none' /* Standard syntax */,
          '-webkit-user-select': 'none' /* Safari */,
          '-ms-user-select': 'none' /* IE 10 and IE 11 */,
        },
      },
      dark: {
        border: '0.063rem solid $neutralDark',

        textarea: {
          color: '$neutralLight',
        },

        '&:has(textarea:focus)': {
          borderColor: '$primaryLight',
        },

        '&:has(textarea:focus) > label': {
          top: '-10px',
          left: '$3',
          padding: '0 $1',
          fontSize: '$xs',
          color: '$neutralLight',
          backgroundColor: 'inherit',
          whiteSpace: 'nowrap',
        },

        '&:has(textarea:not(:placeholder-shown)) > label': {
          top: '-10px',
          left: '$3',
          padding: '0 $1',
          fontSize: '$xs',
          color: '$neutralLight',
          backgroundColor: 'inherit',
          whiteSpace: 'nowrap',
        },

        '&:has(svg) > textarea': {
          padding: '0 $3',
        },

        '&:has(textarea:invalid)': {
          borderColor: '$feedbackDangerLight',
        },

        '&:has(textarea:invalid) > label': {
          color: '$feedbackDangerLight',
        },

        '&:has(textarea:disabled)': {
          opacity: 0.5,
          cursor: 'not-allowed',
          border: '0.063rem solid $neutralExtraLight',
          backgroundColor: '$neutralDark',
        },

        '&:has(textarea:disabled) > label': {
          backgroundColor: '$neutralDark',
          color: '$white',
          'user-select': 'none' /* Standard syntax */,
          '-webkit-user-select': 'none' /* Safari */,
          '-ms-user-select': 'none' /* IE 10 and IE 11 */,
        },
      },
    },
  },

  defaultVariants: {
    mode: 'light',
  },
})

export const Icon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LabelWithIcon = styled('label', {
  position: 'absolute',
  display: 'flex',
  top: '$3',
  left: '3.25rem',
  width: 'max-content',
  fontFamily: '$default',
  fontSize: '$md',
  color: '$neutralDark',
  fontWeight: '$inter1',
  cursor: 'text',

  transition: '200ms ease-out',
  transitionDelay: '150ms',
})

export const Label = styled('label', {
  position: 'absolute',
  display: 'flex',
  top: '$3',
  left: '$5',
  padding: '0 $1',
  width: 'max-content',
  fontFamily: '$default',
  fontSize: '$md',
  color: '$neutralDark',
  fontWeight: '$inter1',
  cursor: 'text',

  transition: '200ms ease-out',
  transitionDelay: '150ms',
})

export const InfoText = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 $2',
})

export const Warning = styled(Text, {
  fontFamily: '$default',
  fontSize: '$xs !important',
  fontWeight: '$inter0',

  display: 'flex',
  alignItems: 'center',
  width: '100%',
})

export const Counter = styled(Text, {
  fontFamily: '$default',
  fontSize: '$xs !important',
  color: '$neutralPure',
  fontWeight: '$inter0',

  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'flex-end',
})

export const Textarea = styled('textarea', {
  fontFamily: '$default',
  fontSize: '$md',
  color: '$neutralPure',
  fontWeight: '$inter1',
  background: 'transparent',
  border: 0,
  width: '100%',
  height: '180px',
  resize: 'none',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::-webkit-input-placeholder': {
    color: 'transparent',
    'user-select': 'none' /* Standard syntax */,
    '-webkit-user-select': 'none' /* Safari */,
    '-ms-user-select': 'none' /* IE 10 and IE 11 */,
  },

  /* FF 4-18 */
  '&:-moz-placeholder': {
    color: 'transparent',
    'user-select': 'none' /* Standard syntax */,
    '-webkit-user-select': 'none' /* Safari */,
    '-ms-user-select': 'none' /* IE 10 and IE 11 */,
  },

  /* FF 19+ */
  '&::-moz-placeholder': {
    color: 'transparent',
    'user-select': 'none' /* Standard syntax */,
    '-webkit-user-select': 'none' /* Safari */,
    '-ms-user-select': 'none' /* IE 10 and IE 11 */,
  },

  /* IE 10+ */
  '&::-ms-input-placeholder': {
    color: 'transparent',
    'user-select': 'none' /* Standard syntax */,
    '-webkit-user-select': 'none' /* Safari */,
    '-ms-user-select': 'none' /* IE 10 and IE 11 */,
  },
})
