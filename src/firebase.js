// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDB_Z3RUX-UkNqTm9lc5TGSYTdnOdLSs5c",
  authDomain: "youtalkyu.firebaseapp.com",
  projectId: "youtalkyu",
  storageBucket: "youtalkyu.appspot.com",
  messagingSenderId: "979720500842",
  appId: "1:979720500842:web:9ff713ba630520f792fc13",
  measurementId: "G-3J3S4165QP"
};

// Initialize Firebase

const  app = initializeApp(firebaseConfig);
export const auth = getAuth(app)