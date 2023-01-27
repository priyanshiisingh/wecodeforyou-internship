// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDnjn40QmcuYQaZ5l4IJe-ZU4bi6jLOlY",
  authDomain: "wecodeforyouproject.firebaseapp.com",
  projectId: "wecodeforyouproject",
  storageBucket: "wecodeforyouproject.appspot.com",
  messagingSenderId: "243842896940",
  appId: "1:243842896940:web:e8581f136922ccaceded89",
  measurementId: "G-FEMF33EJHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { auth, db, app };
