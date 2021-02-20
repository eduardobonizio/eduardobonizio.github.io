/* eslint-disable more/no-window */
import { useDispatch } from 'react-redux';

import { newUser } from '../store/actions/gameConfig.actions';

export default function loadUserConfig() {
  const dispatch = useDispatch();
  const localUserSettings = JSON.parse(localStorage.getItem('userConfig'));
  dispatch(newUser(localUserSettings));
}
