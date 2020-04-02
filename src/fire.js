// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/storage";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyA-gXX_1TReOf8gZFR2-3tjJWlMu5yJai0",
    authDomain: "idp-app-70f95.firebaseapp.com",
    databaseURL: "https://idp-app-70f95.firebaseio.com",
    projectId: "idp-app-70f95",
    storageBucket: "idp-app-70f95.appspot.com",
    messagingSenderId: "267731967690",
    appId: "1:267731967690:web:69c8342fbcac81c5acde33",
    measurementId: "G-8WSENE6SC0"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;