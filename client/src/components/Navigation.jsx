import React from 'react';

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        {props?.links.map((link, index) => (
          <li key={index}>
            <a href={
              link.path
            }>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;