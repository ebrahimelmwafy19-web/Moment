// lib/firebase.ts

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIPu24uWdmg72f9wDpKosnF-oUnvimpI0",
  authDomain: "moment-880fd.firebaseapp.com",
  projectId: "moment-880fd",
  storageBucket: "moment-880fd.appspot.com",
  messagingSenderId: "145226038050",
  appId: "1:145226038050:web:114ef623caa3319822837b",
};

// مهم جدًا في Next.js
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// 🔑 Auth
export const auth = getAuth(app);

// 🔥 Firestore (ده اللي كان ناقصك)
export const db = getFirestore(app);
