import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBD63Zqz-QvVu7LbkWO6B5Nabr_nrf6vkA",
    authDomain: "flower-time.firebaseapp.com",
    databaseURL: "https://flower-time.firebaseio.com",
    projectId: "flower-time",
    storageBucket: "flower-time.appspot.com",
    messagingSenderId: "509518846709",
    appId: "1:509518846709:web:88bec963cc17f2c6e583bc",
    measurementId: "G-PK4P2Z8CTN"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;

