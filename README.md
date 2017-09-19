# react-theming

Small package with some utilities for theming React web apps.

### How to use
`npm i --save blablabla.git`

or

`yarn add blablabla.git`

Then write your theme somewhere:

``` js

// theme.js

  export {
    primaryColor: 'magenta',
    secondaryColor: 'blue',
    sansFont: 'Roboto',
    serifFont: 'Times New Roman',
  }

```

Then in the root component of the app:

``` js

  // App.js

  import React, { Component } from 'react'
  import { render } from 'react-dom'

  import { ThemeProvider } from 'react-theming'

  import theme from './theme'


  class App extends Component { ... }

  render (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    document.getElementById('app')
  )

```

And in the component that needs to be themed:

``` js

// Child.js

  import React, { Component } from 'react'
  import { render } from 'react-dom'

  import { withTheme } from 'react-theming'

  class Child extends Component {
    render () {
      console.log(this.props.theme)
      // Output:
      //
      // {
      //   primaryColor: 'magenta',
      //   secondaryColor: 'blue',
      //   sansFont: 'Roboto',
      //   serifFont: 'Times New Roman',
      // }
    }
  }

  export default withTheme(Child)

```