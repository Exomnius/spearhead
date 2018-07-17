import React from 'react';
import NavBarLogo from './NavBarLogo/NavBarLogo';
import classNames from 'classnames/bind';
import styles from './NavBar.css';

let cx = classNames.bind(styles);

console.log('******************************************$');
console.log(cx);
console.log('******************************************$');

const NavBar = ({children}) => (
  <nav className={cx.bind(styles.NavBar)}>
    {children}
  </nav>
);

NavBar.Logo = NavBarLogo;

export default NavBar;
