import type { Meta, StoryObj } from '@storybook/react'
import { Edit } from '@solarview-ui/core'

export default {
  title: 'Layout/Icons',
  component: Edit,
  args: {
    size: 32,
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
            backgroundColor: '#ececec',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 'max-content',
              padding: '0.5rem',
              borderRadius: '0.5rem',
              backgroundColor: '#fff',
            }}
          >
            {Story()}
          </div>
        </div>
      )
    },
  ],
} as Meta

export const edit: StoryObj = {}
