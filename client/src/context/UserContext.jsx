import React, { createContext, useState, useRef, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [ user, setUser ] = useState({
    id: null,
    email: '',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};