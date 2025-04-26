import React from 'react';
import Navigation from './Navigation';
import { FOOTER_LINKS } from '../utils/Links';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2023 Your Website Name</p>
      <Navigation links={FOOTER_LINKS} />
    </footer>
  );
};
export default Footer;
