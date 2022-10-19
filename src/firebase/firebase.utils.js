import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT3l9DulVEqpQo_whbbUi2CvV4WZAxtbk",
  authDomain: "crown-db-b6ae9.firebaseapp.com",
  projectId: "crown-db-b6ae9",
  storageBucket: "crown-db-b6ae9.appspot.com",
  messagingSenderId: "1004664610398",
  appId: "1:1004664610398:web:6e084029045cb805c39ecf",
  measurementId: "G-FGJ44NK1VE",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
