// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAA5j4KBkioUeclwuZn0oqJI8MCZlY3Q8M",
    authDomain: "doctors-portal-13798.firebaseapp.com",
    projectId: "doctors-portal-13798",
    storageBucket: "doctors-portal-13798.appspot.com",
    messagingSenderId: "1012104115279",
    appId: "1:1012104115279:web:324ad70d356595da05663a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;