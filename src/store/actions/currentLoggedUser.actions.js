export function currentLoggedUser(user) {
  return {
    type: 'UPDATE_USER',
    payload: user,
  };
}
