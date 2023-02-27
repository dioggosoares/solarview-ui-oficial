import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@solarview-ui/core'

export default {
  title: 'Typography/Heading/Light Mode',
  component: Heading,
  args: {
    size: 'md',
    color: 'neutralPure',
    children: 'Custom title',
  },
  argTypes: {
    color: {
      options: [
        'white',
        'black',
        'neutralPure',
        'neutralDark',
        'neutralMedium',
        'neutralLight',
        'neutralExtraLight',
        'backgroundDark',
        'backgroundLight',
        'backgroundGray',
        'primaryPure',
        'primaryPureAlpha',
        'primaryMedium',
        'primaryDark',
        'primaryLight',
        'primaryExtraLight',
        'secondaryPure',
        'secondaryMedium',
        'secondaryLight',
        'feedbackDanger',
        'feedbackSuccess',
        'feedbackInfo',
        'feedbackWarning',
        'feedbackAlert',
        'feedbackDangerLight',
        'feedbackSuccessLight',
        'feedbackInfoLight',
        'feedbackWarningLight',
        'feedbackAlertLight',
        'feedbackInfoText',
      ],
      control: {
        type: 'select',
      },
    },
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            borderRadius: '0.5rem',
            backgroundColor: '#fff',
          }}
        >
          {Story()}
        </div>
      )
    },
  ],
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
}
