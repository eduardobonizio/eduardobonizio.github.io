export function updateUser(user) {
  return {
    type: 'UPDATE_USER',
    payload: user,
  };
}

export function updateScore(score) {
  return {
    type: 'UPDATE_SCORE',
    payload: score,
  };
}

export function updateTheme(theme) {
  return {
    type: 'UPDATE_THEME',
    payload: theme,
  };
}

export function newUser(user) {
  return {
    type: 'NEW_USER',
    payload: user,
  };
}
