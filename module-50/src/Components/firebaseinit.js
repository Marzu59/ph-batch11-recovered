// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKLXboOpj3CK7_30VOmczTaaNbJqNXL_I",
  authDomain: "exploreemailpass.firebaseapp.com",
  projectId: "exploreemailpass",
  storageBucket: "exploreemailpass.firebasestorage.app",
  messagingSenderId: "73601098774",
  appId: "1:73601098774:web:b6231322f8b0a079340137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);