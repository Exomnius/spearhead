import React from 'react';
import Link from 'next/link';
import {NavBar} from 'spearhead-ui';

const Header = () => (
  <header>
    <NavBar>
      <NavBar.Logo src="https://via.placeholder.com/50x50" alt="spearhead logo"/>
      <NavBar.Nav>
        <NavBar.NavItem active>
          <Link href="/">
            <a>Home</a>
          </Link>
        </NavBar.NavItem>
        <NavBar.NavItem>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
        </NavBar.NavItem>
      </NavBar.Nav>
    </NavBar>
  </header>
);

export default Header;
