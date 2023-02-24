// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAknxQKsDYDwZMQRmLjcZTEWnecAFQ0Gns",

  authDomain: "babyname-4fbd7.firebaseapp.com",

  projectId: "babyname-4fbd7",

  storageBucket: "babyname-4fbd7.appspot.com",

  messagingSenderId: "100049047548",

  appId: "1:100049047548:web:efd026c39b1b9833da2c79"

};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const methods = {collection, addDoc};
