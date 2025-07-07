// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfeecCAeu2tQy-VCYdJXZeCjSmriNtOdc",
  authDomain: "coffee-store-app-1c860.firebaseapp.com",
  projectId: "coffee-store-app-1c860",
  storageBucket: "coffee-store-app-1c860.firebasestorage.app",
  messagingSenderId: "258932941324",
  appId: "1:258932941324:web:3c422064eae38ebe05c429"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);