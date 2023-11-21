// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClUv9IvLX8dkFECQocSoszCYPeV5yt_Yc",
  authDomain: "instagram-clone-c657a.firebaseapp.com",
  projectId: "instagram-clone-c657a",
  storageBucket: "instagram-clone-c657a.appspot.com",
  messagingSenderId: "817998569698",
  appId: "1:817998569698:web:2f0fce59847d94f830bebb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
