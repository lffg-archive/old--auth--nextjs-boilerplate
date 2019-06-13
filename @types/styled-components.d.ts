import theme from '~/config/theme'

type ThemeInterface = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line import/prefer-default-export
  export interface DefaultTheme extends ThemeInterface {}
}
