import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'

class ThemeProvider extends Component {
    static childContextTypes = {
        theme: PropTypes.object.isRequired,
    }

    getChildContext() {
        const { theme } = this.props
        return { theme }
    }
    render() {
        return Children.only(this.props.children)
    }
}

const themeProviderDecorator = theme => story => {
    return (
        <ThemeProvider theme={theme}>
            {story()}
        </ThemeProvider>
    )
}

export default ThemeProvider

export {
    themeProviderDecorator
} 