// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpXEMVAi20Gc2vuWm-Xe7tIFdS01pCJEw",
  authDomain: "primer-proyecto-react-js.firebaseapp.com",
  projectId: "primer-proyecto-react-js",
  storageBucket: "primer-proyecto-react-js.appspot.com",
  messagingSenderId: "637398332663",
  appId: "1:637398332663:web:cf6aee5e475df05f498ff2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)