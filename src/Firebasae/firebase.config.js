// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCYW4CRLyqPvUB5WBJ2thrI_5iBtcAlzKI",
    authDomain: "nlearning-website.firebaseapp.com",
    projectId: "nlearning-website",
    storageBucket: "nlearning-website.appspot.com",
    messagingSenderId: "421035452813",
    appId: "1:421035452813:web:cf3eadcac9314feaf7b5c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;