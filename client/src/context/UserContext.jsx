import React, { createContext, useState, useRef, useEffect } from 'react';
import SessionAPI from '../utils/SessionAPI';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const init = useRef(false);
  const [ user, setUser ] = useState({
    id: null,
    email: '',
  });

  useEffect(() => {
    if (init.current) {
      SessionAPI.getSession()
        .then((response) => {
          if (response.status === 200) {
            if (response.data) {
              setUser(response.data);
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
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};