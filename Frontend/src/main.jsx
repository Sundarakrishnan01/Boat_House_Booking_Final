import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import '../src/assets/css/index.css'
import './assets/css/index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAylUx65edYE-VHSkrPCSUOuJOdySlPrno",
  authDomain: "boathouse-ec75a.firebaseapp.com",
  projectId: "boathouse-ec75a",
  storageBucket: "boathouse-ec75a.appspot.com",
  messagingSenderId: "784043684469",
  appId: "1:784043684469:web:93cb5c72ec04710e85fe3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
