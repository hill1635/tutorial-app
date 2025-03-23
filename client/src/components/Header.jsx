import React from 'react';
import Navigation from './Navigation';

const Header = () => {
  const HEADER_LINKS = [
    { label: 'Home', path: '/' },
    { label: 'Login', path: '/login' },
    { label: 'Sign Up', path: '/signup' },
  ];

  return (
    <header>
      <img src="/logo192.png" alt="Logo" />
      <h1>Welcome to the Internet</h1>
      <Navigation links={HEADER_LINKS} />
    </header>
  );
}
export default Header;