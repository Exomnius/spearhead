import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

class Footer extends React.Component {
  render() {
    const {children} = this.props;

    const cx = classNames.bind(styles);

    return (
      <footer className={cx('Footer')}>
        {children}
      </footer>

    );
  }
}

export default Footer;
