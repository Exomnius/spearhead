'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var classNames = _interopDefault(require('classnames'));

var NavBarLogo = function NavBarLogo(_ref) {
  var children = _ref.children;
  return React.createElement(
    'div',
    null,
    children
  );
};

var cx = classNames.bind(undefined);

var NavBar = function NavBar(_ref) {
  var children = _ref.children;
  return React.createElement(
    'nav',
    { className: cx.bind(undefined.NavBar) },
    children
  );
};

NavBar.Logo = NavBarLogo;

exports.NavBar = NavBar;
