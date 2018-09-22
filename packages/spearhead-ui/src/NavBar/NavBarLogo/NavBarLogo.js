import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cx = classNames.bind(styles);

const NavBarLogo = ({src, alt}) => (
  <div>
    <img src={src} alt={alt} className={cx('NavBarLogo')}/>
  </div>
);

export default NavBarLogo;
