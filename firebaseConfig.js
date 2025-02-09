// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-OHWrzPMJ1aGwB_iR2zAEeZ6Ps0MdFD0",
    authDomain: "clouddoctool.firebaseapp.com",
    projectId: "clouddoctool",
    storageBucket: "clouddoctool.firebasestorage.app",
    messagingSenderId: "609490366007",
    appId: "1:609490366007:web:5244344b3f2056ea2259b2",
    measurementId: "G-C990V1PH8M"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
