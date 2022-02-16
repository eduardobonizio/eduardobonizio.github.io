export function updateItensFilter(type, filter) {
  return {
    type,
    payload: filter,
  };
}
