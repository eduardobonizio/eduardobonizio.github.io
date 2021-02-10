import {
  SETTINGS_SET,
  SETTINGS_UNSET,
  SETTINGS_RESET,
} from '../../constants/ActionTypes';

export function set(payload) {
  const { key, value } = payload;
  if (!key || !value) return null;
  return {
    type: SETTINGS_SET,
    payload: {
      key,
      value,
    },
  };
}

export function unset(key) {
  if (!key) return null;
  return {
    type: SETTINGS_UNSET,
    payload: key,
  };
}

export function reset() {
  return {
    type: SETTINGS_RESET,
  };
}
