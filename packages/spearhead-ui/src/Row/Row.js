import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.css';

class Row extends React.Component {
  render() {
    const {children} = this.props;

    const cx = classNames.bind(styles);

    return (
      <div className={cx('Row')}>
        {children}
      </div>

    );
  }
}

export default Row;
