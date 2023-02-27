import { styled } from '../../styles'

export const SidebarRoot = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  overflow: 'hidden',
  backgroundColor: '$secondaryPure',
})

export const ContainerTrigger = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
})

export const Trigger = styled('button', {
  padding: '$7 $4 0 $4',
})

export const SidebarContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: '100vh',
  minHeight: '64rem',
  overflow: 'hidden',
  backgroundColor: '$secondaryPure',
  padding: '$6 0',

  variants: {
    open: {
      true: {
        width: '$80', // 17rem
        transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',

        '@media(max-width: 1366px)': {
          width: '340px',
        },

        '@media(max-width: 1440px)': {
          width: '340px',
        },

        '@media(max-width: 1024px)': {
          width: '370px',
        },
      },

      false: {
        width: '3.375rem',
        transition: 'width 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },

  defaultVariants: {
    open: false,
  },
})
