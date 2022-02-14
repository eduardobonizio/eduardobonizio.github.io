export function updateCharacterClass(characterClass) {
  return {
    type: 'UPDATE_CHARACTER_CLASS',
    payload: { characterClass },
  };
}
export function updateCharacterLevel(level) {
  return {
    type: 'UPDATE_CHARACTER_LEVEL',
    payload: { level },
  };
}
export function updateElementFilter(element) {
  return {
    type: 'UPDATE_ELEMENT_FILTER',
    payload: { element },
  };
}
