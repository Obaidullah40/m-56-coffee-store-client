// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9cSN6gpU_CwtA5Sy2O1PdtNY-s9Gv9tw",
  authDomain: "coffee-store-app-d52f7.firebaseapp.com",
  projectId: "coffee-store-app-d52f7",
  storageBucket: "coffee-store-app-d52f7.firebasestorage.app",
  messagingSenderId: "731879848965",
  appId: "1:731879848965:web:b404704a85f3ad696cf06c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);