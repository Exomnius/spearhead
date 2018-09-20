import React from 'react';
import classNames from 'classnames/bind';
import NavBarLogo from './NavBarLogo/NavBarLogo';
import NavBarNav from './NavBarNav/NavBarNav';
import NavBarNavItem from './NavBarNav/NavBarNavItem/NavBarNavItem';
import styles from './styles.css';

class NavBar extends React.Component {
  render() {
    const {children} = this.props;

    const cx = classNames.bind(styles);

    return (
      <div className={cx('NavBarContainer')}>
        <nav className={cx('NavBar')}>
          {children}
        </nav>
      </div>

    );
  }
}

NavBar.Logo = NavBarLogo;
NavBar.Nav = NavBarNav;
NavBar.NavItem = NavBarNavItem;

export default NavBar;
