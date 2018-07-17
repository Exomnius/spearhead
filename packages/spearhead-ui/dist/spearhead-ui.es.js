import React from 'react';
import classNames from 'classnames';

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

export { NavBar };
