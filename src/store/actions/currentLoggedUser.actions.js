export default function currentLoggedUser(user) {
  return {
    type: 'UPDATE_USER',
    payload: user,
  };
}
