// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

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
export const storage = getStorage();