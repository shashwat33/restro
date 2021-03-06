import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

firebase.initializeApp({
  apiKey: "AIzaSyA5DJuByaacL4FrIXpCLKfYLLFH6wvAlDI",
  authDomain: "restro-3e0a1.firebaseapp.com",
  databaseURL: "https://restro-3e0a1.firebaseio.com",
  projectId: "restro-3e0a1",
  storageBucket: "restro-3e0a1.appspot.com",
  messagingSenderId: "787634875792",
  appId: "1:787634875792:web:57ccd208c52a90a22dd715",
});

export const auth = firebase.auth();
export const db = firebase.firestore();
export const docRefUser = db.collection("User");
export const docRefCategory = db.collection("category");
export const docRefrestaurant = db.collection("Restaurant");
export const docRefmenu = db.collection("menu");
export const docRefOrder = db.collection("Order");
export const storage = firebase.storage();
export default firebase;
