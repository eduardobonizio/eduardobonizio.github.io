export function updateUserName(user) {
  return {
    type: 'UPDATE_USER_NAME',
    payload: user,
  };
}

export function updateAnswerdQuestions(questions) {
  return {
    type: 'UPDATE_ANSWERED_QUESTIONS',
    payload: questions,
  };
}

export function updateLastAnswered(id) {
  return {
    type: 'UPDATE_LAST_ANSWRED_QUESTION',
    payload: id,
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
