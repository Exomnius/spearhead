import React from 'react';
import cnBind from 'classnames/bind';
import styles from './styles.scss';

const cx = cnBind.bind(styles);

const NavBarNavItem = ({children, active}) => (
  <li className={cx('NavBarNavItem', {'NavBarNavItem--Active': active})}>
    {children}
  </li>
);


export default NavBarNavItem;
