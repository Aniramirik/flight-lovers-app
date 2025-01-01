import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDEhC4JZ0zrt1ObPOQZgygFNWIJqvMVrCk",
    authDomain: "web2web-be83b.firebaseapp.com",
    databaseURL: "https://web2web-be83b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "web2web-be83b",
    storageBucket: "web2web-be83b.firebasestorage.app",
    messagingSenderId: "713313536557",
    appId: "1:713313536557:web:a93adf1478d6cf76cc06a4",
    measurementId: "G-PYV2XD9P8B"
  };
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
