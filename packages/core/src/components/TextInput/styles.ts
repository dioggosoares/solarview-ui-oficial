import { styled } from '../../styles'
import { Text } from '../Text'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
})

export const TextInputContainer = styled('div', {
  position: 'relative',
  padding: '$3 $4',
  borderRadius: '$xs',
  boxSizing: 'border-box',
  border: '.0625rem solid $neutralMedium',

  display: 'flex',
  height: '2.625rem',
  alignItems: 'center',
  transition: '0.5s ease-in-out',
  gap: '$3',

  variants: {
    mode: {
      light: {
        border: '.0625rem solid $neutralMedium',

        '&:has(input:focus)': {
          borderColor: '$primaryMedium',
        },

        '&:has(input:focus) > label': {
          top: '-0.688rem',
          left: '$3',
          padding: '0 $1',
          fontSize: '$xs',
          backgroundColor: 'inherit',
          whiteSpace: 'nowrap',
        },

        '&:has(input:not(:placeholder-shown)) > label': {
          top: '-0.688rem',
          left: '$3',
          padding: '0 $1',
          fontSize: '$xs',
          backgroundColor: 'inherit',
          whiteSpace: 'nowrap',
        },

        '&:has(input:invalid)': {
          borderColor: '$feedbackDanger',
        },

        '&:has(input:invalid) > label': {
          color: '$feedbackDanger',
        },

        '&:has(input[type=email]:invalid)': {
          borderColor: '$feedbackDanger',
        },

        '&:has(input[type=email]:invalid) > div:nth-child(3) > button > svg': {
          color: '$feedbackDanger',
        },

        '&:has(input[type=email]:invalid) > div:nth-child(3) > svg': {
          color: '$feedbackDanger',
        },

        '&:has(input[type=email]:invalid) > label': {
          color: '$feedbackDanger',
        },

        '&:has(input:disabled)': {
          opacity: 0.5,
          cursor: 'not-allowed',
          backgroundColor: '$neutralExtraLight',
        },

        '&:has(input:disabled) > label': {
          'user-select': 'none' /* Standard syntax */,
          '-webkit-user-select': 'none' /* Safari */,
          '-ms-user-select': 'none' /* IE 10 and IE 11 */,
        },
      },

      dark: {
        border: '.0625rem solid $neutralDark',

        input: {
          color: '$neutralLight',
        },

        '&:has(input:focus)': {
          borderColor: '$primaryLight',
        },

        '&:has(input:focus) > label': {
          top: '-0.688rem',
          left: '$3',
          padding: '0 $1',
          fontSize: '$xs',
          color: '$neutralLight',
          backgroundColor: 'inherit',
          whiteSpace: 'nowrap',
        },

        '&:has(input:not(:placeholder-shown)) > label': {
          top: '-0.688rem',
          left: '$3',
          padding: '0 $1',
          fontSize: '$xs',
          color: '$neutralLight',
          backgroundColor: 'inherit',
          whiteSpace: 'nowrap',
        },

        '&:has(input:invalid)': {
          borderColor: '$feedbackDangerLight',
        },

        '&:has(input:invalid) > label': {
          color: '$feedbackDangerLight',
        },

        '&:has(input[type=email]:invalid)': {
          borderColor: '$feedbackDangerLight',
        },

        '&:has(input[type=email]:invalid) > div:nth-child(3) > button > svg': {
          color: '$feedbackDangerLight',
        },

        '&:has(input[type=email]:invalid) > div:nth-child(3) > svg': {
          color: '$feedbackDangerLight',
        },

        '&:has(input[type=email]:invalid) > label': {
          color: '$feedbackDangerLight',
        },

        '&:has(input:disabled)': {
          opacity: 0.5,
          cursor: 'not-allowed',
          border: '.0625rem solid $neutralExtraLight',
          backgroundColor: '$neutralDark',
        },

        '&:has(input:disabled) > label': {
          color: '$white',
          'user-select': 'none' /* Standard syntax */,
          '-webkit-user-select': 'none' /* Safari */,
          '-ms-user-select': 'none' /* IE 10 and IE 11 */,
        },
      },
    },
  },

  // mostra o ícone de alerta caso o campo esteja com dado inválido
  '&:has(input:invalid) > div:nth-child(3) > button > svg': {
    opacity: 1,
    visibility: 'visible',

    transition: '0.3s ease-out',
    transitionDelay: '150ms',
  },

  '&:has(input:invalid) > div:nth-child(3) > svg': {
    opacity: 1,
    visibility: 'visible',

    transition: '0.3s ease-out',
    transitionDelay: '150ms',
  },
  ///

  // mostra o ícone de alerta caso o campo esteja com dado inválido
  '&:has(input:not(:invalid)) > div:nth-child(3) > button > svg': {
    opacity: 0,
    visibility: 'hidden',

    transition: '0.3s ease-out',
    transitionDelay: '150ms',
  },

  '&:has(input:not(:invalid)) > div:nth-child(3) > svg': {
    opacity: 0,
    visibility: 'hidden',

    transition: '0.3s ease-out',
    transitionDelay: '150ms',
  },
  ///

  // mostra o ícone de alerta caso o campo TIPO EMAIL esteja com email inválido
  '&:has(input[type=email]:invalid) > div:nth-child(3) > svg': {
    opacity: 1,
    height: 'auto',

    transition: '0.3s ease-out',
    transitionDelay: '150ms',
  },

  '&:has(input[type=email]:invalid) > div:nth-child(3) > button > svg': {
    opacity: 1,
    height: 'auto',

    transition: '0.3s ease-out',
    transitionDelay: '150ms',
  },
  ///

  // esconde o ícone de alerta caso o campo TIPO EMAIL não esteja com email inválido
  '&:has(input[type=email]:not(:invalid)) > div:nth-child(3) > svg': {
    opacity: 0,
    height: 0,
    overflow: 'hidden',

    transition: '0.3s ease-out',
    transitionDelay: '150ms',
  },

  '&:has(input[type=email]:not(:invalid)) > div:nth-child(3) > button > svg': {
    opacity: 0,
    height: 0,
    overflow: 'hidden',

    transition: '0.3s ease-out',
    transitionDelay: '150ms',
  },
  ///

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
  display: 'flex',
  position: 'absolute',
  top: '0.375rem',
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
  display: 'flex',
  position: 'absolute',
  top: '0.375rem',
  left: '$4',
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

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$md',
  color: '$neutralPure',
  fontWeight: '$inter1',
  background: 'transparent',
  border: 0,
  width: '100%',

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

  '&:-webkit-autofill': {
    transition: 'background-color 600000s 0s, color 600000s 0s',
  },

  '&:-webkit-autofill:focus': {
    transition: 'background-color 600000s 0s, color 600000s 0s',
  },

  /* FF 4-18 */
  '&:-moz-autofill': {
    transition: 'background-color 600000s 0s, color 600000s 0s',
  },

  /* FF 19+ */
  '&::-moz-autofill': {
    transition: 'background-color 600000s 0s, color 600000s 0s',
  },

  /* FF 19+ */
  '&:-moz-autofill:focus': {
    transition: 'background-color 600000s 0s, color 600000s 0s',
  },

  /* FF 19+ */
  '&::-moz-autofill:focus': {
    transition: 'background-color 600000s 0s, color 600000s 0s',
  },

  /* IE 10+ */
  '&::-ms-autofill': {
    transition: 'background-color 600000s 0s, color 600000s 0s',
  },

  '&::-ms-autofill:focus': {
    transition: 'background-color 600000s 0s, color 600000s 0s',
  },

  'input[data-autocompleted]': {
    backgroundColor: 'transparent !important',
  },
})
