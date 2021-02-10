export function updateScreenSize(screenSize) {
  return {
    type: 'UPDATE_WINDOW_SIZE',
    payload: screenSize,
  };
}
