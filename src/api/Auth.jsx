import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { currentLoggedUser } from '../store/actions/crrentLoggedUser.actions';
import app from './Firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      dispatch(currentLoggedUser(user))
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
