import { ComponentProps, ElementRef, forwardRef, ReactNode } from 'react'
import {
  Input,
  Icon,
  TextInputContainer,
  Container,
  LabelWithIcon,
  Label,
  InfoText,
  Warning,
} from './styles'

export interface TextInputProps
  extends Omit<ComponentProps<typeof Input>, 'mode'> {
  leftIcon?: ReactNode
  label?: string
  rightIcon?: ReactNode
  error?: string
  bgColor?: string
  mode?: ComponentProps<typeof TextInputContainer>['mode']
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  (
    { error, leftIcon, rightIcon, label, bgColor = '#fff', mode, ...props },
    ref,
  ) => {
    return (
      <Container>
        <TextInputContainer mode={mode} css={{ backgroundColor: bgColor }}>
          {leftIcon && <Icon>{leftIcon}</Icon>}
          <Input ref={ref} id={label} {...props} />
          {rightIcon && props.type === 'password' && (
            <Icon as="span">{rightIcon}</Icon>
          )}
          {rightIcon && props.type !== 'password' && <Icon>{rightIcon}</Icon>}
          {leftIcon ? (
            <LabelWithIcon htmlFor={label}>{label}</LabelWithIcon>
          ) : (
            <Label htmlFor={label}>{label}</Label>
          )}
        </TextInputContainer>
        <InfoText>
          {error && (
            <Warning
              color={mode === 'dark' ? 'feedbackDangerLight' : 'feedbackDanger'}
            >
              {error}
            </Warning>
          )}
        </InfoText>
      </Container>
    )
  },
)

TextInput.displayName = 'TextInput'
