
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDF5R5uDfJ0iA2_4YAdhNjSdgVbRP3eUQQ",
  authDomain: "pistar-tech-24986.firebaseapp.com",
  projectId: "pistar-tech-24986",
  storageBucket: "pistar-tech-24986.appspot.com",
  messagingSenderId: "39656656086",
  appId: "1:39656656086:web:ae36248fa657911a61cd77",
  measurementId: "G-FJXVS176M2"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getAnalytics(app);

// Initialize Firebase
const app =initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance
const auth = getAuth(app);
const storage = getStorage(app);

// Optional: Enable analytics if needed
// getAnalytics(app);

export { db, auth, storage, app }; // Export Firestore instance





