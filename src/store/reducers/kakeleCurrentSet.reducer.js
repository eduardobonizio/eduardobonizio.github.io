const CURRENT_SET = {};

export default function reducer(state = CURRENT_SET, action) {
  const { type, payload } = action;
  switch (type) {
    case 'UPDATE_CURRENT_SET':
      return { ...CURRENT_SET, [payload.slot]: payload };

    default:
      return state;
  }
}
