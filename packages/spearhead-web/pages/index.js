import React from 'react';
import Link from 'next/link'
import cnBind from 'classnames/bind';
import {NavBar, Header, Container, Row, Footer} from 'spearhead-ui';
import PortfolioCard from '../components/PortfolioCard/PortfolioCard';
import 'spearhead-ui/dist/styles.css';
import './global.css';
import styles from './index.css';

const cx = cnBind.bind(styles);

export default () => (
  <div>
    <header>
      <NavBar>
        <NavBar.Logo src="https://via.placeholder.com/50x50" alt="spearhead logo"/>
        <NavBar.Nav>
          <NavBar.NavItem active>
            <Link href="/">Home</Link>
          </NavBar.NavItem>
          <NavBar.NavItem>
            <Link href="/portfolio">Portfolio</Link>
          </NavBar.NavItem>
        </NavBar.Nav>
      </NavBar>
    </header>
    <Container>
      <Row className={cx('Row')}>
        <PortfolioCard
          title="G-Star RAW"
          image="https://via.placeholder.com/500x500"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Row>

      <Row>
        <PortfolioCard
          title="Krefel"
          image="https://via.placeholder.com/500x500"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          offset={true}
        />
      </Row>

      <Row>
        <PortfolioCard
          title="Abitaz"
          image="https://via.placeholder.com/500x500"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />
      </Row>

      <Row>
        <PortfolioCard
          title="Hubo"
          image="https://via.placeholder.com/500x500"
          text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          offset={true}
        />
      </Row>
    </Container>

    <Footer>
      Copyright Cornel Janssen &copy; 2018
    </Footer>
  </div>
)
