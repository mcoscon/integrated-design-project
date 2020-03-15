const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
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
 var fire = firebase.initializeApp(firebaseConfig);
 export default fire;