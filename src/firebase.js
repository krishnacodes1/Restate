// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZwguAVW_Dh5AoHuLnTSVTRzkcYTMhe5Q",
  authDomain: "r-estate-b26ec.firebaseapp.com",
  projectId: "r-estate-b26ec",
  storageBucket: "r-estate-b26ec.appspot.com",
  messagingSenderId: "1056218738849",
  appId: "1:1056218738849:web:a59e7932b43bb4669fc0e0",
  measurementId: "G-C0QHNBFJ26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);