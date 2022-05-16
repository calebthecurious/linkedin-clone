import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDwmyZp5aEo3KpD4uJ2zNejbiJuL2PzZRA",
  authDomain: "linkedin-clone-dc336.firebaseapp.com",
  projectId: "linkedin-clone-dc336",
  storageBucket: "linkedin-clone-dc336.appspot.com",
  messagingSenderId: "44791817788",
  appId: "1:44791817788:web:a8ad177c1155eeea80c539"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };