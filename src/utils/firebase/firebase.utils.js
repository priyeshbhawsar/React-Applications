import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAS8tR2N5HJE0LtnR4lDctFDn9gGqt_4c",
  authDomain: "crwn-clothing-db-f0e73.firebaseapp.com",
  projectId: "crwn-clothing-db-f0e73",
  storageBucket: "crwn-clothing-db-f0e73.appspot.com",
  messagingSenderId: "25407132564",
  appId: "1:25407132564:web:07c1f7037d43d4f2f0f581",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,additionalInformation={displayName: 'mike'}) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {}
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email,password) =>{
  if(!email || !password) return;
   createUserWithEmailAndPassword(auth,email,password)
}