import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacing,
  lineHeights,
  radii,
  space,
} from '@solarview-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    letterSpacing,
    lineHeights,
    radii,
    space,
  },
})
