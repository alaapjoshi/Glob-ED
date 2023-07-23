// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "REDACTED",
  authDomain: "glob-ed-2815e.firebaseapp.com",
  projectId: "glob-ed-2815e",
  storageBucket: "glob-ed-2815e.appspot.com",
  messagingSenderId: "596120472029",
  appId: "1:596120472029:web:f16d07c5ae810b79510e34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
