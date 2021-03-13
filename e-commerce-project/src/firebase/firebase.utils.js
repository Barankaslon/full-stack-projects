import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCucb0sFdzH5LyOj1VugS3M7LrVymTR_j8",
    authDomain: "crwn-db-ed096.firebaseapp.com",
    projectId: "crwn-db-ed096",
    storageBucket: "crwn-db-ed096.appspot.com",
    messagingSenderId: "723789743830",
    appId: "1:723789743830:web:75ce09108958dbce3aab77",
    measurementId: "G-CQQSR7H3Z8"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;