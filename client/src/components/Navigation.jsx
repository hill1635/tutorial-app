import React, { useContext, useMemo } from 'react';
import { SessionContext } from '../context/SessionContext';

const Navigation = (props) => {
  const { session } = useContext(SessionContext);

  const filteredLinks = useMemo(() => {
    return props?.links.filter((link) => {
      return (
        link.show === 'always' ||
        (session.id && link.show === 'signedIn') ||
        (!session.id && link.show === 'signedOut')
      );
    });
  }, [session, props.links]);

  return (
    <nav>
      <ul>
        {filteredLinks.map((link, index) => (
          <li key={index}>
            <a href={link.path}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
