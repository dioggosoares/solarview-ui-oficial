import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@solarview-ui/core'

export default {
  title: 'Typography/Text/Light Mode',
  component: Text,
  args: {
    size: 'md',
    color: 'neutralPure',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
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
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
