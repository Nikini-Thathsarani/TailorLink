import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8Sl_rVf-uLAcPRmcZc-0HnCf6Oeqy6Zg",
  authDomain: "tailorlink-web.firebaseapp.com",
  projectId: "tailorlink-web",
  storageBucket: "tailorlink-web.firebasestorage.app",
  messagingSenderId: "646259745972",
  appId: "1:646259745972:web:5c389ee040e3ab2e7fa3e1",
  measurementId: "G-SB78369T43"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);