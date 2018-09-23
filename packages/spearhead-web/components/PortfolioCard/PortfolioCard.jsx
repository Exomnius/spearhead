import React from 'react';
import {Card} from 'spearhead-ui';
import classNames from 'classnames/bind';
import styles from './styles.css';

const cx = classNames.bind(styles);

const PortfolioCard = ({title, text, image, skills, offset}) => (
  <Card className={cx('PortfolioCard', {
    'PortfolioCard--Flipped': offset
  })}>
    <Card.Body className={cx({
      'PortfolioCardBody--Flipped': offset
    })}>
      <div className={cx('PortfolioCardImage')}>
        <img src={image} alt={title}/>
      </div>
      <div className={cx('PortfolioCardContent', {
        'PortfolioCardContent--Flipped': offset
      })}>
        <h3 className={cx('PortfolioCardTitle')}>
          {title}
        </h3>
        <div className={cx('PortfolioCardText')}>
          {text}
        </div>
        <div className={cx('SkillsContainer')}>
          {skills && (
            <>
              <span className={cx('SkillsTitle')}>
                Skills:
              </span>
              <div className={cx('SkillsList')}>
                {skills.join(', ')}
              </div>
            </>
          )}
        </div>
      </div>
    </Card.Body>
  </Card>
);

export default PortfolioCard;
