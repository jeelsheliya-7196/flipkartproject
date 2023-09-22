// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0zwlQbOtZFCRpry0NGA4mdU1rHUTyY2I",
  authDomain: "flipkart-3e9b5.firebaseapp.com",
  projectId: "flipkart-3e9b5",
  storageBucket: "flipkart-3e9b5.appspot.com",
  messagingSenderId: "310234325426",
  appId: "1:310234325426:web:41d65b347232bfa39204ab"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();