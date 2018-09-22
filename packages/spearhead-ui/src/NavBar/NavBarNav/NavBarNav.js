import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const NavBarNav = ({children}) => (
  <ul className={cx('NavBarNav')}>
    {children}
  </ul>
);


export default NavBarNav;
