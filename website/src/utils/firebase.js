import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDyMxze2ltL-BuK95fkMlKiaOQokfGqioQ",
    authDomain: "caritas-701a5.firebaseapp.com",
    databaseURL: "https://caritas-701a5.firebaseio.com",
    projectId: "caritas-701a5",
    storageBucket: "caritas-701a5.appspot.com",
    messagingSenderId: "644557594475",
    appId: "1:644557594475:web:7f7a654f8fb76317c0362e",
    measurementId: "G-H9M02YWKV2"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;