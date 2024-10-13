// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcqeyvsdb2LcB17pqmlhfy7zpKMogmf68",
  authDomain: "full-stack-test-exercise-28226.firebaseapp.com",
  projectId: "full-stack-test-exercise-28226",
  storageBucket: "full-stack-test-exercise-28226.appspot.com",
  messagingSenderId: "756700174318",
  appId: "1:756700174318:web:6073170835971b41d8e0ff",
  measurementId: "G-TJL4WYW1T5"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)