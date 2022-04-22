// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_MTUBE_API_KEY,
  authDomain: "not-mtube.firebaseapp.com",
  projectId: "not-mtube",
  storageBucket: "not-mtube.appspot.com",
  messagingSenderId: "664875506669",
  appId: "1:664875506669:web:5d64cf040cf7255492e5e4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase.auth()