// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYocSwJYKfcefP6aTMH-L3PPigpPWBlTE",
  authDomain: "auth-moha-milon-28cf0.firebaseapp.com",
  projectId: "auth-moha-milon-28cf0",
  storageBucket: "auth-moha-milon-28cf0.appspot.com",
  messagingSenderId: "229340723267",
  appId: "1:229340723267:web:ecd8a3f2e8aeb645457cf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;