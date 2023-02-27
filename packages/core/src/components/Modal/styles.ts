import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../styles'

export const ModalContainerRoot = styled(Dialog.Root, {})

export const ModalPortal = styled(Dialog.Portal, {})

export const ModalTrigger = styled(Dialog.Trigger, {
  all: 'unset',
})

export const ModalHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: 'auto',
})

export const ModalTitle = styled(Dialog.Title, {
  fontSize: '$2xl',
  fontWeight: '$inter1',
  fontFamily: '$default',
})

export const ModalClose = styled(Dialog.Close, {
  all: 'unset',
  cursor: 'pointer',
  display: 'flex',
  padding: '$2',

  svg: {
    width: '$4',
    height: '$4',
  },
})

export const ModalOverlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  background: '#1d1d1d80',
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
})

export const ModalContent = styled(Dialog.Content, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '$8',
  width: '100%',
  minHeight: '6.25rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '$6',

  variants: {
    variant: {
      primary: {
        background: '$white',
        boxShadow: '0 0.125rem 0.25rem rgba(69, 69, 69, 0.25)',

        p: {
          color: '$neutralPure',
        },
      },

      secondary: {
        background: '$white',
        border: '1px solid $primaryMedium',

        p: {
          color: '$neutralPure',
        },
      },

      tertiary: {
        background: '$white',
        border: '1px solid $neutralMedium',

        p: {
          color: '$neutralPure',
        },
      },

      quaternary: {
        background: '$white',
        border: '1px solid $neutralExtraLight',
        boxShadow: '0 0.25rem 0.5rem rgba(0, 0, 0, 0.08)',

        p: {
          color: '$neutralPure',
        },
      },

      dark: {
        background: '$backgroundDark',

        p: {
          color: '$white',
        },
      },
    },

    borderStyle: {
      pointed: {
        borderRadius: 0,
      },

      rounded: {
        borderRadius: '$sm',
      },
    },

    size: {
      sm: {
        maxWidth: '18.75rem', // 300px
      },

      md: {
        maxWidth: '31.25rem', // 500px
      },

      lg: {
        maxWidth: '50rem', // 800px
      },

      xl: {
        maxWidth: '71.25rem', // 1140px
      },
    },

    color: {
      white: {
        background: '$white !important',
      },
      black: {
        background: '$black !important',
      },
      neutralPure: {
        background: '$neutralPure !important',
      },
      neutralDark: {
        background: '$neutralDark !important',
      },
      neutralMedium: {
        background: '$neutralMedium !important',
      },
      neutralLight: {
        background: '$neutralLight !important',
      },
      neutralExtraLight: {
        background: '$neutralExtraLight !important',
      },
      backgroundDark: {
        background: '$backgroundDark !important',
      },
      backgroundLight: {
        background: '$backgroundLight !important',
      },
      backgroundGray: {
        background: '$backgroundGray !important',
      },
      primaryPure: {
        background: '$primaryPure !important',
      },
      primaryPureAlpha: {
        background: '$primaryPureAlpha !important',
      },
      primaryMedium: {
        background: '$primaryMedium !important',
      },
      primaryDark: {
        background: '$primaryDark !important',
      },
      primaryLight: {
        background: '$primaryLight !important',
      },
      primaryExtraLight: {
        background: '$primaryExtraLight !important',
      },
      secondaryPure: {
        background: '$secondaryPure !important',
      },
      secondaryMedium: {
        background: '$secondaryMedium !important',
      },
      secondaryLight: {
        background: '$secondaryLight !important',
      },
      feedbackDanger: {
        background: '$feedbackDanger !important',
      },
      feedbackSuccess: {
        background: '$feedbackSuccess !important',
      },
      feedbackInfo: {
        background: '$feedbackInfo !important',
      },
      feedbackWarning: {
        background: '$feedbackWarning !important',
      },
      feedbackAlert: {
        background: '$feedbackAlert !important',
      },
      feedbackDangerLight: {
        background: '$feedbackDangerLight !important',
      },
      feedbackSuccessLight: {
        background: '$feedbackSuccessLight !important',
      },
      feedbackInfoLight: {
        background: '$feedbackInfoLight !important',
      },
      feedbackWarningLight: {
        background: '$feedbackWarningLight !important',
      },
      feedbackAlertLight: {
        background: '$feedbackAlertLight !important',
      },
      feedbackInfoText: {
        background: '$feedbackInfoText !important',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    borderStyle: 'rounded',
    size: 'md',
  },
})
