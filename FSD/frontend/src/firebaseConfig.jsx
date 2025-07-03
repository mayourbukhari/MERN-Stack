// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpFRag1mHNvinOkk5tp3JhQnxwK5ToyOA",
  authDomain: "weather-98642.firebaseapp.com",
  projectId: "weather-98642",
  storageBucket: "weather-98642.firebasestorage.app",
  messagingSenderId: "1050910292493",
  appId: "1:1050910292493:web:0ab9991228f3c2c590b344",
  measurementId: "G-3N5F4XZKK6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);