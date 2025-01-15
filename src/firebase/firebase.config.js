// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7_VdUo5-2EPJhYXt91mkOrCirorAcPcc",
  authDomain: "quick-gig.firebaseapp.com",
  projectId: "quick-gig",
  storageBucket: "quick-gig.firebasestorage.app",
  messagingSenderId: "222285269495",
  appId: "1:222285269495:web:6a1980a2658cf6dc3c86f2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
