import React from 'react';
import cnBind from 'classnames/bind';
import classNames from 'classnames';
import styles from './styles.scss';

const cx = cnBind.bind(styles);

const NavBarNavItem = ({children, active}) => (
  <li className={classNames(cx('NavBarNavItem'), {'active': active})}>
    {children}
  </li>
);


export default NavBarNavItem;
