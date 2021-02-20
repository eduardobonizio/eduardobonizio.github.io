const INITIAL_GAME_CONFIG = {
  userName: '',
  score: undefined,
  gameTheme: '',
  lastAnswered: 1,
  answered: [],
};

export default function reducer(state = INITIAL_GAME_CONFIG, action) {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_USER_NAME':
      return { ...state, userName: payload };

    case 'UPDATE_SCORE':
      return { ...state, score: payload };

    case 'UPDATE_ANSWERED_QUESTIONS':
      return { ...state, answered: payload };

    case 'UPDATE_LAST_ANSWRED_QUESTION':
      return { ...state, lastAnswered: payload };

    case 'UPDATE_THEME':
      return { ...state, gameTheme: payload };

    case 'NEW_USER':
      return payload;

    default:
      return state;
  }
}
