import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB25d7Kj88jZmUGen5woGc2KQruBJYurG4",
  authDomain: "chat-app-530ff.firebaseapp.com",
  projectId: "chat-app-530ff",
  storageBucket: "chat-app-530ff.appspot.com",
  messagingSenderId: "64156102242",
  appId: "1:64156102242:web:e17afc12b93b15ebe8eb3b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
