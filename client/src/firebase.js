// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1UhhbrxXH5jybKpQPnpP0jNqjsuMSzn0",
  authDomain: "video-7451b.firebaseapp.com",
  projectId: "video-7451b",
  storageBucket: "video-7451b.appspot.com",
  messagingSenderId: "92709731048",
  appId: "1:92709731048:web:6271a4b7b6b28c1710e75d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;