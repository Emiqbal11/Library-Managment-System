// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyClrATaaJPkiYrdNIc4UytHgR9b3eFvg70",
  authDomain: "libraryms-aa44c.firebaseapp.com",
  projectId: "libraryms-aa44c",
  storageBucket: "libraryms-aa44c.appspot.com",
  messagingSenderId: "478452224027",
  appId: "1:478452224027:web:7cfbb7928aff642b2b28be"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=app.auth();
export const firestore=app.firestore();
export const storage=app.storage();
export default app;