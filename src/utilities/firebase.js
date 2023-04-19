// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqXF7lDMEQ8z7px3W7FvZmexlz_jWyTeA",
  authDomain: "task2react.firebaseapp.com",
  databaseURL: "https://task2react-default-rtdb.firebaseio.com",
  projectId: "task2react",
  storageBucket: "task2react.appspot.com",
  messagingSenderId: "891313989388",
  appId: "1:891313989388:web:721bd1c93daced58ac4b29",
  measurementId: "G-51VNGE1SWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);