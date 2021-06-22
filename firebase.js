import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDQrn-joGHwlulzgPJkUvz9ylCstQnYAfk",
    authDomain: "v2-da87f.firebaseapp.com",
    projectId: "v2-da87f",
    storageBucket: "v2-da87f.appspot.com",
    messagingSenderId: "901742416161",
    appId: "1:901742416161:web:5df2410ce1d65ea9676e60"
  };

  const app = !firebase.apps.length 
              ? firebase.initializeApp(firebaseConfig) 
              : firebase.app()
  
  const db = app.firestore();

  export default db ;