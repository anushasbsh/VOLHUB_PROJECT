// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyeZUDjPAveNoKyWhLBufrddnC5s9USlQ",
  authDomain: "volhub-28ec2.firebaseapp.com",
  projectId: "volhub-28ec2",
  storageBucket: "volhub-28ec2.appspot.com",
  messagingSenderId: "118539941050",
  appId: "1:118539941050:web:aa18ed6e47aea375f77e83",
  measurementId: "G-N0ERTPTE70"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleprovider = new GoogleAuthProvider();