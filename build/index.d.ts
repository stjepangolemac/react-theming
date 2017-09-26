import { Component } from 'react'

declare module 'react-theming' {
  class ThemeProvider extends Component<any, any> { }
  function withTheme (Component: any): any
  function themeProviderDecorator (theme: any): (story: any) => any
}
