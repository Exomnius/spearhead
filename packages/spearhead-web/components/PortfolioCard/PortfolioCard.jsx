import React from 'react';
import {Card} from 'spearhead-ui';
import classNames from 'classnames/bind';
import styles from './styles.css';

const cx = classNames.bind(styles);

const PortfolioCard = ({title, text, image, offset}) => (
  <Card className={cx('PortfolioCard', {
    'PortfolioCard--Flipped': offset
  })}>
    <Card.Body className={cx({
      'PortfolioCardBody--Flipped': offset
    })}>
      <div className={cx('PortfolioCardImage')}>
        <img src={image} alt={title}/>
      </div>
      <div className={cx('PortfolioCardText')}>
        {text}
      </div>
    </Card.Body>
  </Card>
);

export default PortfolioCard;
