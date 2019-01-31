
 import firebase from 'firebase/app'
 import 'firebase/database' 

 // Initialize Firebase
 const config = {
    apiKey: "AIzaSyCtqINfSoQGUOpusFp9-Q13ouVwzNyXekU",
    authDomain: "comentarios-a219a.firebaseapp.com",
    databaseURL: "https://comentarios-a219a.firebaseio.com",
    projectId: "comentarios-a219a",
    storageBucket: "comentarios-a219a.appspot.com",
    messagingSenderId: "971946711807"
  };
firebase.initializeApp(config);

export const database = firebase.database()