import React from 'react';
import cnBind from 'classnames/bind';
import {Container, Row} from 'spearhead-ui';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import App from '../components/App/App';
import styles from './portfolio.css';

const cx = cnBind.bind(styles);

export default () => (
  <App>
    <Container>
      <Row className={cx('Row')}>
        <PortfolioCard
          title="G-Star RAW"
          image="https://via.placeholder.com/250x250"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          skills={['ReactJS', 'NodeJS', 'SSR']}
        />
      </Row>

      <Row>
        <PortfolioCard
          title="Krefel"
          image="https://via.placeholder.com/250x250"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          offset={true}
        />
      </Row>

      <Row>
        <PortfolioCard
          title="Abitaz"
          image="https://via.placeholder.com/250x250"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Row>

      <Row>
        <PortfolioCard
          title="Hubo"
          image="https://via.placeholder.com/250x250"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          offset={true}
        />
      </Row>
    </Container>
  </App>
)
