import app from '../Firebase';

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

export async function geTotalQuestions() {
  const get = app.database().ref('totalQuestions')
  const total = await get.once('value').then(snapshot => snapshot.val());
  return total + 1;
}

export async function setTotalQuestions(newTotal){
  try{
    app.database().ref('totalQuestions').set(newTotal);
  }catch(err){
    console.log(err);
  }
}

export async function setItemOnDatabase(key, item) {
  console.log(item);
  try{
    await app.database().ref(key).child(item.id).set(item);
    await setTotalQuestions(item.id)
  }catch(err){
    console.log(err);
  }
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
