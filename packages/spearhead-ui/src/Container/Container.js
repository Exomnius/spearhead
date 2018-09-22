import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

class Container extends React.Component {
  render() {
    const {children} = this.props;

    const cx = classNames.bind(styles);

    return (
      <div className={cx('Container')}>
        {children}
      </div>

    );
  }
}

export default Container;
