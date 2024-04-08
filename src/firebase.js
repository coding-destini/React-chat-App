
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAe6n4xRsgqI2qa8OVjebj5LHUA3mEQKEw",
  authDomain: "chat-app-3f58d.firebaseapp.com",
  projectId: "chat-app-3f58d",
  storageBucket: "chat-app-3f58d.appspot.com",
  messagingSenderId: "421265742938",
  appId: "1:421265742938:web:af26ca43f8516a6f240c63",
  measurementId: "G-W2TM3DDTPW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

const analytics = getAnalytics(app);