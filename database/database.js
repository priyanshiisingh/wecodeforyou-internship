import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDDnjn40QmcuYQaZ5l4IJe-ZU4bi6jLOlY",
  authDomain: "wecodeforyouproject.firebaseapp.com",
  projectId: "wecodeforyouproject",
  storageBucket: "wecodeforyouproject.appspot.com",
  messagingSenderId: "243842896940",
  appId: "1:243842896940:web:a479a38b62959c51eded89",
  measurementId: "G-MGY4QMJ5CH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const analytics = getAnalytics(app);

export { db, auth, app };
