export const FOOTER_LINKS = [
  { label: 'Privacy Policy', type: 'link', path: '/privacy', show: 'always' },
  { label: 'Terms of Service', type: 'link', path: '/terms', show: 'always' },
  { label: 'Contact Us', type: 'link', path: '/contact', show: 'always' },
  { label: 'About', type: 'link', path: '/about', show: 'always' },
];

export const HEADER_LINKS = [
  { label: 'Home', type: 'link', path: '/', show: 'always' },
  { label: 'Account', type: 'link', path: '/account', show: 'signedIn' },
  { label: 'Login', type: 'link', path: '/login', show: 'signedOut' },
  { label: 'Sign Up', type: 'link', path: '/signup', show: 'signedOut' },
];