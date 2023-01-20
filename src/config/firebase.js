// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBzdfXPBLN51-F5bSx22CNdBDq35wzbmeI",

  authDomain: "dc-backend-3ea84.firebaseapp.com",

  projectId: "dc-backend-3ea84",

  storageBucket: "dc-backend-3ea84.appspot.com",

  messagingSenderId: "322207006742",

  appId: "1:322207006742:web:d12ffa1d0e77ff92c5f537",

  measurementId: "G-V314LNCRP6"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
