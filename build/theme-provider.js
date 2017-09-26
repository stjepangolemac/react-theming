import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

class ThemeProvider extends Component {

    getChildContext() {
        const { theme } = this.props;
        return { theme };
    }
    render() {
        return Children.only(this.props.children);
    }
}

ThemeProvider.childContextTypes = {
    theme: PropTypes.object.isRequired
};
const themeProviderDecorator = theme => story => {
    return React.createElement(
        ThemeProvider,
        { theme: theme },
        story()
    );
};

export default ThemeProvider;

export { themeProviderDecorator };