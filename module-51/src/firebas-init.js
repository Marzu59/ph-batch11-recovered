//denger

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdmn5e_EOibtCvKaYr-eX7GZs-aVI7gJs",
  authDomain: "auth-intrigation-9d1f1.firebaseapp.com",
  projectId: "auth-intrigation-9d1f1",
  storageBucket: "auth-intrigation-9d1f1.firebasestorage.app",
  messagingSenderId: "433234835697",
  appId: "1:433234835697:web:6a721302c4593fcaf8d150"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);