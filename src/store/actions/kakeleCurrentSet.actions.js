export default function updateCurrentSet(item) {
  return {
    type: 'UPDATE_CURRENT_SET',
    payload: item,
  };
}
