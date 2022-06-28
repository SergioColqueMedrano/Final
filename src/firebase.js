// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8OKNBWRfv1kQhobnOdtES4VmLzgj--l0",
  authDomain: "tp-final-prog3.firebaseapp.com",
  databaseURL: "https://tp-final-prog3-default-rtdb.firebaseio.com",
  projectId: "tp-final-prog3",
  storageBucket: "tp-final-prog3.appspot.com",
  messagingSenderId: "253341748100",
  appId: "1:253341748100:web:1b38b1c832a8a0e0a66bd1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//export const db = app.firestore();

export async function login(email, password) {
  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredentials.user;
}