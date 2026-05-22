import { initializeApp } from "https://www.gstatic.com/firebasejs/12.13.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/12.13.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCI5G9Vr7ZYL8DD03nIZGKADKVkU-xraTw",
  authDomain: "todo-19a24.firebaseapp.com",
  databaseURL:
    "https://todo-19a24-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todo-19a24",
  storageBucket: "todo-19a24.firebasestorage.app",
  messagingSenderId: "1032774019442",
  appId: "1:1032774019442:web:325b1415385700ca5d55eb",
  measurementId: "G-W3GTN34PV2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
};
