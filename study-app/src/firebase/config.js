// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0rEfLMBObjFvjHA2D_TpYF94FpVrzllI",
  authDomain: "jygy-studyapp.firebaseapp.com",
  projectId: "jygy-studyapp",
  storageBucket: "jygy-studyapp.appspot.com",
  messagingSenderId: "683837084805",
  appId: "1:683837084805:web:21726c313b76d3d8f785ec",
  measurementId: "G-QW64SF1WDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);