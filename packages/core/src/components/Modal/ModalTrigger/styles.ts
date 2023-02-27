import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../../styles'

export const ModalContainerTrigger = styled(Dialog.Trigger, {
  all: 'unset',
  display: 'flex',
  minWidth: 'max-content',
  boxSizing: 'border-box',

  '&:focus': {
    outlineWidth: 0,
  },
})
