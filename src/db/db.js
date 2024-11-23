import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBBa_6WKffYJeZvZpqiDbQKHgUUNX4P-q4",
  authDomain: "ecommerce-entrega-ch.firebaseapp.com",
  projectId: "ecommerce-entrega-ch",
  storageBucket: "ecommerce-entrega-ch.firebasestorage.app",
  messagingSenderId: "9892154370",
  appId: "1:9892154370:web:c6df3714d0b8195822ab1b"
};


initializeApp(firebaseConfig);

const db = getFirestore();

export default db;
