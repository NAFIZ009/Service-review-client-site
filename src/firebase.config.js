// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArubsDX3QFaVJUaJA9Fq0q-VAn1xcaPrc",
  authDomain: "video-walah.firebaseapp.com",
  projectId: "video-walah",
  storageBucket: "video-walah.appspot.com",
  messagingSenderId: "83098562356",
  appId: "1:83098562356:web:e13110a8da31d82e7eff61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;