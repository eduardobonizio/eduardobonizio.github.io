import app from './Firebase';

export async function getAllQuestionsFromDatabase() {
  const get = app.database().ref();
  const questions = await get
    .once('value')
    .then(snapshot => snapshot.val().questions);
  return questions;
}

export async function getQuestionFromDatabase(key, id) {
  const get = app.database().ref(key).child(id);
  const question = await get.once('value').then(snapshot => snapshot.val());
  return question;
}

export async function setItemOnDatabase(key, item) {
  app.database().ref(key).push(item);
}

export async function setItemsOnDatabase(key, list) {
  list.forEach(item => app.database().ref(key).child(item.id).set(item));
}

export async function removeItemFromDatabase(key, item) {
  app.database().ref(key).child(item.id).remove();
}

export async function removeItemsFromDatabase(key, list) {
  list.forEach(item => app.database().ref(key).child(item.id).remove());
}
