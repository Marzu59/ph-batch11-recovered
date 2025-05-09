// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtXsc9y7RoYFF_ulmafSGQa1wgoPiDmIg",
  authDomain: "simpleprojet-b36fd.firebaseapp.com",
  projectId: "simpleprojet-b36fd",
  storageBucket: "simpleprojet-b36fd.firebasestorage.app",
  messagingSenderId: "132395770237",
  appId: "1:132395770237:web:0aee24c1b7dc585b486c14"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
 export  const auth = getAuth(app);