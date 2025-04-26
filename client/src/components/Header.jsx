import React from 'react';
import Navigation from './Navigation';
import { HEADER_LINKS } from '../utils/Links';

const Header = () => {

  return (
    <header>
      <img src="/logo192.png" alt="Logo" />
      <h1>Welcome to the Internet</h1>
      <Navigation links={HEADER_LINKS} />
    </header>
  );
};
export default Header;