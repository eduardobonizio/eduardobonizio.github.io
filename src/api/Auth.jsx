import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import {currentLoggedUser} from '../store/actions/currentLoggedUser.actions';
import app from './Firebase';

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(user => {
      setCurrentUser(user);
      dispatch(currentLoggedUser(user))
    });
  }, []);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        currentUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
