const CURRENT_SET = {
  necklace: {},
  helmet: {},
  ring: {},
  weapon: {},
  armor: {},
  shield: {},
  book: {},
  accessorie: {},
  leg: {},
  shoe: {},
};

export default function reducer(state = CURRENT_SET, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_CURRENT_SET':
      return { ...state, ...payload };

    case 'UPDATE_SET_ITEM':
      return { ...state, [payload.slot]: payload };

    default:
      return state;
  }
}
