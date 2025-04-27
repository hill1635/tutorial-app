import React, { createContext, useState, useRef, useEffect } from 'react';
import SessionAPI from '../utils/SessionAPI';

export const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const init = useRef(false);
  const [session, setSession] = useState({
    id: null,
    email: '',
  });

  useEffect(() => {
    if (init.current) {
      SessionAPI.getSession()
        .then((response) => {
          if (response.status === 200) {
            if (response.data) {
              setSession(response.data);
            }
          } else {
            console.error('Failed to get session:', response.data);
          }
        })
        .catch((error) => {
          console.error('Error during session check:', error);
        });
    } else {
      init.current = true;
    }
  }, []);

  return (
    <SessionContext.Provider value={{ session, setSession }}>
      {children}
    </SessionContext.Provider>
  );
};
