import React from 'react';
import cnBind from 'classnames/bind';
import classNames from 'classnames';
import styles from './styles.scss';
import CardBody from './CardBody/CardBody';

const cx = cnBind.bind(styles);

class Card extends React.Component {
  render() {
    const {children, className} = this.props;

    return (
      <div className={classNames(className, cx('Card'))}>
        {children}
      </div>

    );
  }
}

Card.Body = CardBody;

export default Card;
