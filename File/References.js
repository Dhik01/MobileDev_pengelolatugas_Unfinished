import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA5502ZK6F_exyvdjfB0XaSkgm-BeDqZ88",
  authDomain: "taskme-6700e.firebaseapp.com",
  databaseURL: "https://taskme-6700e-default-rtdb.firebaseio.com",
  projectId: "taskme-6700e",
  storageBucket: "taskme-6700e.appspot.com",
  messagingSenderId: "940508958446",
  appId: "1:940508958446:web:8309440daf54a5b19f6dff",
  measurementId: "G-9VBX8H6FTZ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const dataRef = firebase.database().ref();
const auth = firebase.auth();

export { dataRef, auth };