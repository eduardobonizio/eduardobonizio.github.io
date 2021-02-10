const INITIAL_WINDOW_SIZE = {
  width: 0,
  height: 0,
};

export default function reducer(state = INITIAL_WINDOW_SIZE, action) {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_WINDOW_SIZE':
      return payload;

    default:
      return state;
  }
}
