const CURRENT_FILTERS = {
  level: 1,
  characterClass: 'Alchemist',
  element: 'All',
  mainStat: 'armor',
  itemName: '',
  slot: 'All',
  orderBy: 'level',
};

export default function reducer(state = CURRENT_FILTERS, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_CHARACTER_LEVEL':
      return { ...state, level: payload };

    case 'UPDATE_CHARACTER_CLASS':
      return { ...state, characterClass: payload };

    case 'UPDATE_ELEMENT_FILTER':
      return { ...state, element: payload };

    case 'UPDATE_STAT_FILTER':
      return { ...state, mainStat: payload };

    case 'UPDATE_NAME_FILTER':
      return { ...state, itemName: payload };

    case 'UPDATE_SLOT_FILTER':
      return { ...state, slot: payload };

    case 'UPDATE_ORDER_FILTER':
      return { ...state, orderBy: payload };

    default:
      return state;
  }
}
