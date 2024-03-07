import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD9KwnVT18qybrapNYn_CcDeiW02PqDAY",
  authDomain: "next-firebase-crud-ca3b1.firebaseapp.com",
  projectId: "next-firebase-crud-ca3b1",
  storageBucket: "next-firebase-crud-ca3b1.appspot.com",
  messagingSenderId: "746428376674",
  appId: "1:746428376674:web:6fb6f9b5b174471d8c533b"
};


// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth }