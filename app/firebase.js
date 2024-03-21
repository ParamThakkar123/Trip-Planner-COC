// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAod4VOTmx7wVOzDQBVywfCYDsNBIP0cxE",
  authDomain: "trip-planner-b696f.firebaseapp.com",
  projectId: "trip-planner-b696f",
  storageBucket: "trip-planner-b696f.appspot.com",
  messagingSenderId: "774930919194",
  appId: "1:774930919194:web:002684b5c5caea787a06a3",
  measurementId: "G-VCFBY9QWHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);