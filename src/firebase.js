import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAodHFSpsfIB9nJOqdmH70rmgz5sg4xgfE",
    authDomain: "tiktok-clone-c758e.firebaseapp.com",
    projectId: "tiktok-clone-c758e",
    storageBucket: "tiktok-clone-c758e.appspot.com",
    messagingSenderId: "119821566839",
    appId: "1:119821566839:web:a207bfd41e8efe570e5772",
    measurementId: "G-7LRD71NK5W"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;