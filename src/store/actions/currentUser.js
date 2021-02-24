export function currentUser(user) {
  return {
    type: 'UPDATE_USER',
    payload: user,
  };
}
