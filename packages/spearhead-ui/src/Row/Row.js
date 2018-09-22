import React from 'react';
import cnBind from 'classnames/bind';
import classNames from 'classnames';
import styles from './styles.scss';

class Row extends React.Component {
  render() {
    const {children, className} = this.props;

    const cx = cnBind.bind(styles);

    return (
      <div className={classNames(cx('Row'), className)}>
        {children}
      </div>

    );
  }
}

export default Row;
