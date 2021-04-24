import firebase from 'firebase';

require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBpvNwEivN7ZP6YXj7SHtjqpZKPxhHUvPU",
  authDomain: "reminder-f48a6.firebaseapp.com",
  projectId: "reminder-f48a6",
  storageBucket: "reminder-f48a6.appspot.com",
  messagingSenderId: "477918832707",
  appId: "1:477918832707:web:fdb7c31374d5e3c766ccf6",
  measurementId: "G-5QDRZDJRP5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  export default firebase.firestore()