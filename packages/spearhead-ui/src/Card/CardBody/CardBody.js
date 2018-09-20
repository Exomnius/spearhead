import React from 'react';
import cnBind from 'classnames/bind';
import classNames from 'classnames';
import styles from './styles.css';

class CardBody extends React.Component {
  render() {
    const {children, className} = this.props;

    const cx = cnBind.bind(styles);

    return (
      <div className={classNames(cx('CardBody'), className)}>
        {children}
      </div>

    );
  }
}

export default CardBody;
