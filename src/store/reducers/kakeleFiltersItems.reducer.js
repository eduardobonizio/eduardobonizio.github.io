const CURRENT_FILTERS = {
  level: 1,
  characterClass: 'Alchemist',
  mainStat: 'armor',
  element: 'All',
};

export default function reducer(action, state = CURRENT_FILTERS) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_CHARACTER_LEVEL':
      return { ...state, ...payload };

    case 'UPDATE_CHARACTER_CLASS':
      return { ...state, ...payload };

    case 'UPDATE_ELEMENT_FILTER':
      return { ...state, ...payload };

    case 'UPDATE_STAT_FILTER':
      return { ...state, ...payload };

    default:
      return state;
  }
}
