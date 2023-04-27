import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA69m1MWyqKcwq8WJEkRwNzFP0ZeHClux4",

  authDomain: "chatify-e04f2.firebaseapp.com",

  projectId: "chatify-e04f2",

  storageBucket: "chatify-e04f2.appspot.com",

  messagingSenderId: "539018983391",

  appId: "1:539018983391:web:8ce957357dfa435f6bf66a"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();