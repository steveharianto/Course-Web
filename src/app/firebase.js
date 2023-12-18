// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVw2dDXzSYnNayto6R0JEb4Xl8EhxMFNI",
  authDomain: "learningportal-e1100.firebaseapp.com",
  projectId: "learningportal-e1100",
  storageBucket: "learningportal-e1100.appspot.com",
  messagingSenderId: "1306816543",
  appId: "1:1306816543:web:d11a794591b3df3d83652a",
  measurementId: "G-XQBT8SQXVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;