// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { FIREBASE_APP_ID, FIREBASE_KEY } from "./constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_KEY,
  authDomain: "netflix-gpt-16037.firebaseapp.com",
  projectId: "netflix-gpt-16037",
  storageBucket: "netflix-gpt-16037.appspot.com",
  messagingSenderId: "61403770563",
  appId: FIREBASE_APP_ID,
  measurementId: "G-CKK3YEYQYQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
