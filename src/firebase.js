// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBYoZQ9IRTEgKrYYc7NepIs3kLZlyR72Xg",
    authDomain: "inventory-cc857.firebaseapp.com",
    projectId: "inventory-cc857",
    storageBucket: "inventory-cc857.appspot.com",
    messagingSenderId: "108027344501",
    appId: "1:108027344501:web:c0dc6d38a5e9f6029c2a3c",
    measurementId: "G-LSRHMPXQ5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };