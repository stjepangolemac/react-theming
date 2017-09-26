var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withTheme = ComponentToWrap => {
    var _class, _temp;

    return _temp = _class = class ThemeComponent extends Component {

        render() {
            const { theme } = this.context;

            return React.createElement(ComponentToWrap, _extends({}, this.props, { theme: theme }));
        }
    }, _class.contextTypes = {
        theme: PropTypes.object.isRequired
    }, _temp;
};
export default withTheme;