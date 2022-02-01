const INITIAL_GAME_CONFIG = null;

// eslint-disable-next-line default-param-last
export default function reducer(state = INITIAL_GAME_CONFIG, action) {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_USER':
      return payload;

    default:
      return state;
  }
}
