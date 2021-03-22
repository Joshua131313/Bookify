import firebase from 'firebase'

const  firebaseApp = firebase.initializeApp (
    {
  apiKey: "AIzaSyB4v5FR6EMLycAouOAyRqInGNmpHMILBAo",
  authDomain: "books-4e09f.firebaseapp.com",
  projectId: "books-4e09f",
  storageBucket: "books-4e09f.appspot.com",
  messagingSenderId: "603650570486",
  appId: "1:603650570486:web:46719c093541b05ae754d7",
  measurementId: "G-B1FZL5EB01"

});


const db= firebaseApp.firestore()
const Fire = firebaseApp
export  {db, Fire}
