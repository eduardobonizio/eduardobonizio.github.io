/* eslint-disable more/no-window */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '../Firebase';
import { currentUser } from '../store/actions/currentUser.actions';
import { newUser } from '../store/actions/gameConfig.actions';

export default function loadUserConfig() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      dispatch(currentUser(user));
    });

    return unsubscribe;
  }, []);
  const localUserSettings = JSON.parse(localStorage.getItem('userConfig'));
  dispatch(newUser(localUserSettings));
}
