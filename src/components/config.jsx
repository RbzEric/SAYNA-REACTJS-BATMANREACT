// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmwTjq2rQvGbLpTIzPTFYcLAqovp1SIek",
  authDomain: "sayna-reactjs-batmanreac-fd15b.firebaseapp.com",
  projectId: "sayna-reactjs-batmanreac-fd15b",
  storageBucket: "sayna-reactjs-batmanreac-fd15b.appspot.com",
  messagingSenderId: "1079176459745",
  appId: "1:1079176459745:web:33afeaf31257114f7e0ea0",
  measurementId: "G-1253Z4WJX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {db , storage , auth};