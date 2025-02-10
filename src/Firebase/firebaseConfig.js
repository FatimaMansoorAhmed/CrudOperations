// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj95-l4pJXF0_-nqK0DpT9TPUtOTqY7kg",
  authDomain: "crud-b72ad.firebaseapp.com",
  projectId: "crud-b72ad",
  storageBucket: "crud-b72ad.firebasestorage.app",
  messagingSenderId: "1071982031086",
  appId: "1:1071982031086:web:5ebfd67e89bc8df48243ff",
  measurementId: "G-8VKMPP1RTC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export {auth}