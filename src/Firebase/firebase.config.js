// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ00qt6HQp_ImEFzDHCK8zXvIo_r65_dY",
  authDomain: "fir-auth-router-tailwind.firebaseapp.com",
  projectId: "fir-auth-router-tailwind",
  storageBucket: "fir-auth-router-tailwind.appspot.com",
  messagingSenderId: "627265991627",
  appId: "1:627265991627:web:835925979cb1fd23b9fc4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;