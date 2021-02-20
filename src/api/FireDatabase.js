import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAuv8U5q6c_jbJiE5CviIt0LPlGb0o6jnU',
  authDomain: 'edu-bonizio-io.firebaseapp.com',
  databaseURL: 'https://edu-bonizio-io-default-rtdb.firebaseio.com',
  projectId: 'edu-bonizio-io',
  storageBucket: 'edu-bonizio-io.appspot.com',
  messagingSenderId: '204932734023',
  appId: '1:204932734023:web:6135c1b8796d42a24e6562',
  measurementId: 'G-JNPJ0VCYZJ',
};
// Initialize Firebase
// firebase.analytics();
const fireDatabase = firebase.initializeApp(firebaseConfig);
export default fireDatabase;
