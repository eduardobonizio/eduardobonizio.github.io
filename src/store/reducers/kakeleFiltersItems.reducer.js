const CURRENT_FILTERS = {
  level: 1,
  characterClass: 'alchemist',
  itemMainStatus: 'armor',
  element: 'All',
};

export default function reducer(state = CURRENT_FILTERS, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_CHARACTER_LEVEL':
      return { ...state, ...payload };

    case 'UPDATE_ELEMENT_FILTER':
      return { ...state, ...payload };

    default:
      return state;
  }
}
