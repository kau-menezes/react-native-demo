// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXdkNKmpsALrZiAfGw2m2pCF2m24ydAYI",
  authDomain: "react-native-demo-c2141.firebaseapp.com",
  projectId: "react-native-demo-c2141",
  storageBucket: "react-native-demo-c2141.appspot.com",
  messagingSenderId: "103312204886",
  appId: "1:103312204886:web:0f5c2f57ef748e0eb447f7"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig); -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- default config from firebase 

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);