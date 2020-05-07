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
// firebase.initializeApp({
//   apiKey: "AIzaSyBLyplo3FrU_IrCozlgW2KOOjDcLWR9QRY",
//   authDomain: "storageimage-9b092.firebaseapp.com",
//   databaseURL: "https://storageimage-9b092.firebaseio.com",
//   projectId: "storageimage-9b092",
//   storageBucket: "storageimage-9b092.appspot.com",
//   messagingSenderId: "883237042053",
//   appId: "1:883237042053:web:35d880d0b4046b9bf776ec",
//   measurementId: "G-4XEPFGG1K8",
// });

export const auth = firebase.auth();
export const db = firebase.firestore();
export const docRefCategory = db.collection("category");
export const User = db.collection("User");
export const docRefmenu = db.collection("menu");
export const docRefRestaurant = db.collection("Restaurant");

export default firebase;

// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
// export { storage, firebase as default };
