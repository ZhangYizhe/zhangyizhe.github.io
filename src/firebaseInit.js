// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZnAECbdwXY6SOvDa5kyM-AE-8X3EYPpI",
    authDomain: "elecoxy-com.firebaseapp.com",
    projectId: "elecoxy-com",
    storageBucket: "elecoxy-com.appspot.com",
    messagingSenderId: "926870137110",
    appId: "1:926870137110:web:04d9d9d386600606c24837",
    measurementId: "G-B73FH0QJ3L"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAnalytics = getAnalytics(firebaseApp);

export const firebaseDB = getFirestore(firebaseApp);