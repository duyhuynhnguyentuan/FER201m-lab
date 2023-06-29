// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4ouvYYdaTqsb5aC-Upb8EnTRhqp2kIxU",
  authDomain: "films-auth.firebaseapp.com",
  projectId: "films-auth",
  storageBucket: "films-auth.appspot.com",
  messagingSenderId: "569560859417",
  appId: "1:569560859417:web:ab200bcd3b93e7ef67fb88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)