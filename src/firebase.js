import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAMheTB5Wyx0NtqihP34ORGU3HLLaIROr0",
  authDomain: "robinhood-clone-f8bd6.firebaseapp.com",
  projectId: "robinhood-clone-f8bd6",
  storageBucket: "robinhood-clone-f8bd6.appspot.com",
  messagingSenderId: "888672297774",
  appId: "1:888672297774:web:79d66bdbf73dbcec8710bf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
