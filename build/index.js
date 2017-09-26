'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.themeProviderDecorator = exports.withTheme = exports.ThemeProvider = undefined;

var _themeProvider = require('./theme-provider');

var _themeProvider2 = _interopRequireDefault(_themeProvider);

var _withTheme = require('./with-theme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/// <reference path="index.d.ts"" />

exports.default = {
  ThemeProvider: _themeProvider2.default,
  withTheme: _withTheme2.default,
  themeProviderDecorator: _themeProvider.themeProviderDecorator
};
exports.ThemeProvider = _themeProvider2.default;
exports.withTheme = _withTheme2.default;
exports.themeProviderDecorator = _themeProvider.themeProviderDecorator;