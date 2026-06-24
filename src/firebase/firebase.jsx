import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa4EgzvS8Og6m1-hCthhn9Yj2WNgMg9Do",
  authDomain: "the-indian-drip.firebaseapp.com",
  projectId: "the-indian-drip",
  storageBucket: "the-indian-drip.firebasestorage.app",
  messagingSenderId: "476944978880",
  appId: "1:476944978880:web:0232602370bcfa4871ee25",
  measurementId: "G-BNYBTXESC6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;