// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3t1a9lLkP1PbLmHNcMIIMpOdGVH5v9Lw",
  authDomain: "react-pedro-course-cef4f.firebaseapp.com",
  projectId: "react-pedro-course-cef4f",
  storageBucket: "react-pedro-course-cef4f.appspot.com",
  messagingSenderId: "42468493420",
  appId: "1:42468493420:web:0eb1ebcd9652387dd1f049"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//tells we have an aithentication in our project
export const auth = getAuth(app); //auth contains all info of user who has just loged in

//there are a lof og ways to authenticate in firebase, one of them using google
export const provider = new GoogleAuthProvider(); 

export const db = getFirestore(app);