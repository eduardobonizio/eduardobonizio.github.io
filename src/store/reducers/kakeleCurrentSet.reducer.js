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

export default function reducer(action, state = CURRENT_SET) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_CURRENT_SET':
      return { ...state, [payload.slot]: payload };

    default:
      return state;
  }
}
