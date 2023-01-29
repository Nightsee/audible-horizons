import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCVxgHlIk_GZ05C26T9_4B1CGawXc5B1eo",
  authDomain: "audible-horizons.firebaseapp.com",
  projectId: "audible-horizons",
  storageBucket: "audible-horizons.appspot.com",
  messagingSenderId: "909428318725",
  appId: "1:909428318725:web:b215350758763d64fa726c",
  measurementId: "G-9YH9JLGQ84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)