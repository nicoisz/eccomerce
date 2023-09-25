// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMooyeqN5GNPYcSsTNeVJOykWZ0fd51SI",
  authDomain: "ecommerce-crwn-5fbc9.firebaseapp.com",
  projectId: "ecommerce-crwn-5fbc9",
  storageBucket: "ecommerce-crwn-5fbc9.appspot.com",
  messagingSenderId: "617041623981",
  appId: "1:617041623981:web:f25add7ddd38c64340bf24",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
