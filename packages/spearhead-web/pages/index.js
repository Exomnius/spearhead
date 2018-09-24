import React from 'react';
import cnBind from 'classnames/bind';
import {Container, Row} from 'spearhead-ui';
import App from '../components/App/App';
import styles from './index.css';

const cx = cnBind.bind(styles);

const Home = () => (
  <App>
    <Container>
      <Row className={cx('Row')}>
        <img src="https://via.placeholder.com/250x250" alt="Cornel Janssen"/>
        <div>
          lorem ipsum here ...
        </div>
      </Row>
    </Container>
  </App>
);


export default Home;
