import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDobyhj9dY8mMjjVk3YYJ8pwOZzCOhIlJU",
  authDomain: "farmers-mall-9f12b.firebaseapp.com",
  projectId: "farmers-mall-9f12b",
  storageBucket: "farmers-mall-9f12b.appspot.com",
  messagingSenderId: "752260240118",
  appId: "1:752260240118:web:60d768e7d61a77deae92d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { firestore, auth }