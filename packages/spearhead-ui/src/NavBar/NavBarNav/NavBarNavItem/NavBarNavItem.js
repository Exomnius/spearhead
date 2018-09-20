import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';

const cx = classNames.bind(styles);

const NavBarNavItem = ({children}) => (
  <li className={cx('NavBarNavItem')}>
    {children}
  </li>
);


export default NavBarNavItem;
