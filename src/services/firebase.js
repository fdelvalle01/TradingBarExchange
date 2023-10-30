// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7cCbKHiElr8pdvpZY824vZ7aoCWOvcGI",
  authDomain: "tradingbar-6e417.firebaseapp.com",
  projectId: "tradingbar-6e417",
  storageBucket: "tradingbar-6e417.appspot.com",
  messagingSenderId: "654780761843",
  appId: "1:654780761843:web:68a03c4ee03a5ca9d11986",
  measurementId: "G-3SFQNSKJGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore = getFirestore();

export const storage = getStorage();

export const database = getDatabase();

export const storageRef = getStorage(app); 