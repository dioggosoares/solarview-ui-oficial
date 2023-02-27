import {
  ComponentProps,
  ElementRef,
  forwardRef,
  ReactNode,
  useRef,
  useState,
} from 'react'
import { colors } from '@solarview-ui/tokens'
import {
  InfoText,
  Counter,
  Container,
  Label,
  LabelWithIcon,
  Icon,
  Textarea,
  TextAreaContainer,
  Warning,
} from './styles'

export interface TextAreaProps
  extends Omit<ComponentProps<typeof Textarea>, 'mode'> {
  label?: string
  leftIcon?: ReactNode
  error?: string
  onChangeCountChars?: () => void
  bgColor?: string
  mode?: ComponentProps<typeof TextAreaContainer>['mode']
}

export const TextArea = forwardRef<ElementRef<typeof Textarea>, TextAreaProps>(
  (
    {
      label,
      leftIcon,
      error,
      onChangeCountChars,
      bgColor = '#fff',
      mode,
      ...props
    },
    ref,
  ) => {
    const [countChars, setCountChars] = useState('000')
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    function counterChars() {
      const texto = textAreaRef?.current?.value
      setCountChars(
        String(
          texto!.length < 10
            ? '00' + texto!.length
            : texto!.length < 100
            ? '0' + texto!.length
            : texto!.length,
        ),
      )
    }

    return (
      <Container>
        <TextAreaContainer mode={mode} css={{ backgroundColor: bgColor }}>
          {leftIcon && <Icon>{leftIcon}</Icon>}
          <Textarea
            ref={ref ?? textAreaRef}
            id={label}
            maxLength={230}
            onInput={counterChars}
            {...props}
          ></Textarea>
          {leftIcon ? (
            <LabelWithIcon htmlFor={label}>{label}</LabelWithIcon>
          ) : (
            <Label htmlFor={label}>{label}</Label>
          )}
        </TextAreaContainer>
        <InfoText>
          {error && (
            <Warning
              color={mode === 'dark' ? 'feedbackDangerLight' : 'feedbackDanger'}
            >
              {error}
            </Warning>
          )}
          <Counter
            style={{
              color: mode === 'dark' ? colors.neutralLight : colors.neutralPure,
            }}
          >
            {countChars}/230
          </Counter>
        </InfoText>
      </Container>
    )
  },
)

TextArea.displayName = 'TextArea'
