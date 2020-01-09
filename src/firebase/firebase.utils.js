import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCVj9Zcqt-_1woHiltRzs7xwZzN31Iolnc",
  authDomain: "crwn-db-5d57c.firebaseapp.com",
  databaseURL: "https://crwn-db-5d57c.firebaseio.com",
  projectId: "crwn-db-5d57c",
  storageBucket: "crwn-db-5d57c.appspot.com",
  messagingSenderId: "786615837414",
  appId: "1:786615837414:web:137af2750927286f6a1127",
  measurementId: "G-T22RF944DH"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
