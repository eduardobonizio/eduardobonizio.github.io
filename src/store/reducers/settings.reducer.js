import * as ActionTypes from '../../constants/ActionTypes';

const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action = null) {
  const { type, payload } = action;
  switch (type) {
    case ActionTypes.SETTINGS_RESET:
      return INITIAL_STATE;

    case ActionTypes.SETTINGS_SET:
      state.filter(i => i.key !== payload.key);
      return [...state.filter(i => i.key !== payload.key), payload];

    case ActionTypes.SETTINGS_UNSET:
      return [...state.filter(i => i.key !== payload)];

    default:
      return state;
  }
}
