// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATGEd9hAs01UPpBU3SwCYvzX5g0_1QhqA",
  authDomain: "resturan-auth.firebaseapp.com",
  projectId: "resturan-auth",
  storageBucket: "resturan-auth.appspot.com",
  messagingSenderId: "111466933875",
  appId: "1:111466933875:web:ae753c65638a6c74160406"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;