export function updateCurrentSet(items) {
  return {
    type: 'UPDATE_CURRENT_SET',
    payload: items,
  };
}

export function udateOneEquipment(item) {
  console.log(item);
  return {
    type: 'UPDATE_SET_ITEM',
    payload: item,
  };
}
