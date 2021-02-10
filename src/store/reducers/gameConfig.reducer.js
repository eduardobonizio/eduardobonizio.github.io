const INITIAL_WINDOW_SIZE = {
  userName: '',
  score: undefined,
  gameTheme: '',
};

export default function reducer(state = INITIAL_WINDOW_SIZE, action) {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_USER':
      return { ...state, userName: payload };

    case 'UPDATE_SCORE':
      return { ...state, score: payload };

    case 'UPDATE_THEME':
      return { ...state, gameTheme: payload };

    case 'NEW_USER':
      return payload;

    default:
      return state;
  }
}
